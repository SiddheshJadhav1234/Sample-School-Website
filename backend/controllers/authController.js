import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";
import Parent from "../models/parent.js";
import { errorResponse, successResponse } from "../utils/errorHandler.js";

/**
 * SIGNUP API
 * 
 * Creates a new user account with hashed password
 * 
 * Request body:
 * {
 *   name: string,
 *   email: string (unique),
 *   password: string,
 *   confirmPassword: string,
 *   role: string (optional, defaults to "student")
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { user info }
 * }
 */
export const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, role = "student" } =
      req.body;

    // Validation 1: Check if all required fields are provided
    if (!name || !email || !password || !confirmPassword) {
      return errorResponse(
        res,
        400,
        "All fields (name, email, password, confirmPassword) are required."
      );
    }

    // Validation 2: Check password length (minimum 6 characters)
    if (password.length < 6) {
      return errorResponse(res, 400, "Password must be at least 6 characters.");
    }

    // Validation 3: Check if passwords match
    if (password !== confirmPassword) {
      return errorResponse(res, 400, "Passwords do not match.");
    }

    // Validation 4: Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, 400, "User with this email already exists.");
    }

    // Validation 5: Ensure role is valid
    const validRoles = ["student", "teacher", "admin", "parent"];
    if (!validRoles.includes(role)) {
      return errorResponse(
        res,
        400,
        `Invalid role. Must be one of: ${validRoles.join(", ")}`
      );
    }

    // Hash the password using bcrypt
    // Salt rounds = 10 (industry standard for security)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Create role-specific record in appropriate collection
    if (role === "student") {
      // For students, generate a unique roll number
      const studentCount = await Student.countDocuments();
      const rollNumber = `STU${Date.now()}${studentCount}`;
      
      await Student.create({
        name,
        rollNumber,
        class: "Pending", // To be assigned by admin
        section: "Pending",
        userAccount: newUser._id,
      });
    } else if (role === "teacher") {
      // For teachers, create teacher record
      await Teacher.create({
        name,
        email,
        subject: "Pending", // To be assigned by admin
        userAccount: newUser._id,
      });
    } else if (role === "parent") {
      // For parents, create parent record
      await Parent.create({
        name,
        email,
        userAccount: newUser._id,
      });
    }
    // Note: Parent role doesn't have a collection, they're linked via Student.parent

    // Return success response
    // Note: Password is NOT included in response
    return successResponse(res, 201, "User registered successfully", {
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return errorResponse(res, 500, "Error during signup. Please try again.");
  }
};

/**
 * LOGIN API
 * 
 * Authenticates user and returns JWT token
 * 
 * Request body:
 * {
 *   email: string,
 *   password: string,
 *   role: string (must match the role user signed up with)
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: {
 *     token: string,
 *     user: { id, name, email, role, linkedStudent (if parent) }
 *   }
 * }
 */
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validation 1: Check if email, password and role are provided
    if (!email || !password || !role) {
      return errorResponse(res, 400, "Email, password, and role are required.");
    }

    // Find user in database
    const user = await User.findOne({ email }).populate("linkedStudent");

    // Validation 2: Check if user exists
    if (!user) {
      return errorResponse(
        res,
        401,
        "Invalid email or password. Please try again."
      );
    }

    // Validation 3: Check if role matches
    if (user.role !== role) {
      return errorResponse(
        res,
        403,
        `This account is registered as a ${user.role}. Please login with ${user.role} role.`
      );
    }

    // Validation 4: Compare provided password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return errorResponse(
        res,
        401,
        "Invalid email or password. Please try again."
      );
    }

    // Generate JWT token
    // Token contains: user ID and role
    // Expires in 24 hours (1 day)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Prepare user response object
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    // If user is a parent, include linked student info
    if (user.role === "parent" && user.linkedStudent) {
      userResponse.linkedStudent = user.linkedStudent;
    }

    // Return success response with token and user info
    return successResponse(res, 200, "Login successful", {
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    return errorResponse(res, 500, "Error during login. Please try again.");
  }
};
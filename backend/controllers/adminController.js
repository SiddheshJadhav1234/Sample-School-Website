import bcrypt from "bcrypt";
import User from "../models/user.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";
import { errorResponse, successResponse } from "../utils/errorHandler.js";

/**
 * CREATE STUDENT API
 * 
 * Admin creates a new student account and student user profile
 * 
 * Request body:
 * {
 *   name: string,
 *   email: string (unique),
 *   password: string,
 *   rollNumber: string (unique),
 *   class: string (e.g., "5A"),
 *   section: string (e.g., "A"),
 *   parentId: ObjectId (reference to parent user - optional)
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { student info }
 * }
 */
export const createStudent = async (req, res) => {
  try {
    const { name, email, password, rollNumber, class: classLevel, section, parentId } = req.body;

    // Validation: Check if all required fields are provided
    if (!name || !email || !password || !rollNumber || !classLevel || !section) {
      return errorResponse(
        res,
        400,
        "All fields (name, email, password, rollNumber, class, section) are required."
      );
    }

    // Validation: Check if email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return errorResponse(res, 400, "User with this email already exists.");
    }

    // Validation: Check if roll number already exists
    const rollNumberExists = await Student.findOne({ rollNumber });
    if (rollNumberExists) {
      return errorResponse(res, 400, "Student with this roll number already exists.");
    }

    // Validation: If parentId provided, verify parent exists
    let parent = null;
    if (parentId) {
      parent = await User.findById(parentId);
      if (!parent || parent.role !== "parent") {
        return errorResponse(res, 400, "Parent user not found or invalid.");
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User account for student
    const userAccount = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
    });

    // Create Student record
    const student = await Student.create({
      name,
      rollNumber,
      class: classLevel,
      section,
      userAccount: userAccount._id,
      parent: parent ? parent._id : null,
    });

    // If parent provided, update parent's linkedStudent
    if (parent) {
      await User.findByIdAndUpdate(parentId, {
        linkedStudent: student._id,
      });
    }

    return successResponse(res, 201, "Student created successfully", {
      student: {
        id: student._id,
        name: student.name,
        rollNumber: student.rollNumber,
        class: student.class,
        section: student.section,
      },
    });
  } catch (error) {
    console.error("Create student error:", error);
    return errorResponse(res, 500, "Error creating student. Please try again.");
  }
};

/**
 * CREATE TEACHER API
 * 
 * Admin creates a new teacher account and teacher profile
 * 
 * Request body:
 * {
 *   name: string,
 *   email: string (unique),
 *   password: string,
 *   subject: string (e.g., "Mathematics"),
 *   classesAssigned: [{ class: "5A", section: "A" }] (optional)
 *   qualification: string (optional),
 *   experience: number (optional)
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { teacher info }
 * }
 */
export const createTeacher = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      subject,
      classesAssigned = [],
      qualification,
      experience = 0,
    } = req.body;

    // Validation: Check if all required fields are provided
    if (!name || !email || !password || !subject) {
      return errorResponse(
        res,
        400,
        "All fields (name, email, password, subject) are required."
      );
    }

    // Validation: Check if email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return errorResponse(res, 400, "User with this email already exists.");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User account for teacher
    const userAccount = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "teacher",
    });

    // Create Teacher record
    const teacher = await Teacher.create({
      name,
      email,
      subject,
      classesAssigned,
      userAccount: userAccount._id,
      qualification,
      experience,
    });

    return successResponse(res, 201, "Teacher created successfully", {
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        subject: teacher.subject,
        classesAssigned: teacher.classesAssigned,
      },
    });
  } catch (error) {
    console.error("Create teacher error:", error);
    return errorResponse(res, 500, "Error creating teacher. Please try again.");
  }
};

/**
 * GET ALL STUDENTS API
 * 
 * Admin retrieves list of all students with pagination
 * 
 * Query parameters:
 * - page: number (default: 1)
 * - limit: number (default: 10)
 * - class: string (optional, filter by class)
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { students: [], totalCount: number }
 * }
 */
export const getAllStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, class: classFilter } = req.query;

    // Build filter
    const filter = {};
    if (classFilter) {
      filter.class = classFilter;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Fetch students with pagination
    const students = await Student.find(filter)
      .skip(skip)
      .limit(Number(limit))
      .populate("parent", "name email")
      .populate("userAccount", "email");

    // Get total count for pagination
    const totalCount = await Student.countDocuments(filter);

    return successResponse(res, 200, "Students retrieved successfully", {
      students,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Get all students error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving students. Please try again."
    );
  }
};

/**
 * GET ALL TEACHERS API
 * 
 * Admin retrieves list of all teachers
 * 
 * Query parameters:
 * - page: number (default: 1)
 * - limit: number (default: 10)
 * - subject: string (optional, filter by subject)
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { teachers: [], totalCount: number }
 * }
 */
export const getAllTeachers = async (req, res) => {
  try {
    const { page = 1, limit = 10, subject } = req.query;

    // Build filter
    const filter = {};
    if (subject) {
      filter.subject = subject;
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Fetch teachers with pagination
    const teachers = await Teacher.find(filter)
      .skip(skip)
      .limit(Number(limit))
      .populate("userAccount", "email");

    // Get total count for pagination
    const totalCount = await Teacher.countDocuments(filter);

    return successResponse(res, 200, "Teachers retrieved successfully", {
      teachers,
      pagination: {
        total: totalCount,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Get all teachers error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving teachers. Please try again."
    );
  }
};

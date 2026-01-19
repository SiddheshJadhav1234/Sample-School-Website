import Student from "../models/student.js";
import User from "../models/user.js";
import { errorResponse, successResponse } from "../utils/errorHandler.js";

/**
 * GET STUDENT'S OWN DATA
 * 
 * Student can only view their own profile data
 * Secure: Uses req.user.id from JWT token
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { student profile }
 * }
 */
export const getMyProfile = async (req, res) => {
  try {
    // req.user.id comes from JWT token (set by verifyToken middleware)
    const userId = req.user.id;

    // Find student by user account
    const student = await Student.findOne({ userAccount: userId })
      .populate("parent", "name email")
      .populate("classTeacher", "name subject");

    // Validation: Check if student record exists
    if (!student) {
      return errorResponse(res, 404, "Student profile not found.");
    }

    return successResponse(res, 200, "Student profile retrieved successfully", {
      student,
    });
  } catch (error) {
    console.error("Get student profile error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving student profile. Please try again."
    );
  }
};

/**
 * GET STUDENT BY ID
 * 
 * Retrieve specific student details (admin can view any student)
 * 
 * URL parameter:
 * - studentId: ObjectId of the student
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { student }
 * }
 */
export const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Find student by ID
    const student = await Student.findById(studentId)
      .populate("parent", "name email")
      .populate("userAccount", "email")
      .populate("classTeacher", "name subject");

    // Validation: Check if student exists
    if (!student) {
      return errorResponse(res, 404, "Student not found.");
    }

    return successResponse(res, 200, "Student retrieved successfully", {
      student,
    });
  } catch (error) {
    console.error("Get student by ID error:", error);
    return errorResponse(res, 500, "Error retrieving student. Please try again.");
  }
};

/**
 * GET STUDENTS BY CLASS
 * 
 * Retrieve all students in a specific class
 * Useful for teachers to see their class students
 * 
 * Query parameters:
 * - class: string (e.g., "5A")
 * - section: string (e.g., "A") - optional
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { students: [] }
 * }
 */
export const getStudentsByClass = async (req, res) => {
  try {
    const { class: classLevel, section } = req.query;

    // Validation: Class is required
    if (!classLevel) {
      return errorResponse(res, 400, "Class parameter is required.");
    }

    // Build filter
    const filter = { class: classLevel };
    if (section) {
      filter.section = section;
    }

    // Fetch students
    const students = await Student.find(filter)
      .populate("parent", "name email")
      .populate("userAccount", "email");

    return successResponse(res, 200, "Students retrieved successfully", {
      students,
    });
  } catch (error) {
    console.error("Get students by class error:", error);
    return errorResponse(res, 500, "Error retrieving students. Please try again.");
  }
};

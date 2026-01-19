import Teacher from "../models/teacher.js";
import Student from "../models/student.js";
import { errorResponse, successResponse } from "../utils/errorHandler.js";

/**
 * GET TEACHER'S OWN PROFILE
 * 
 * Teacher can view their own profile
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { teacher profile }
 * }
 */
export const getMyProfile = async (req, res) => {
  try {
    // req.user.id comes from JWT token
    const userId = req.user.id;

    // Find teacher by user account
    const teacher = await Teacher.findOne({ userAccount: userId });

    // Validation: Check if teacher record exists
    if (!teacher) {
      return errorResponse(res, 404, "Teacher profile not found.");
    }

    return successResponse(res, 200, "Teacher profile retrieved successfully", {
      teacher,
    });
  } catch (error) {
    console.error("Get teacher profile error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving teacher profile. Please try again."
    );
  }
};

/**
 * GET TEACHER'S ASSIGNED STUDENTS
 * 
 * Teacher can view students of their assigned classes
 * 
 * Query parameters:
 * - classLevel: string (optional - if teacher teaches multiple classes)
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { students: [] }
 * }
 */
export const getAssignedStudents = async (req, res) => {
  try {
    const userId = req.user.id;
    const { classLevel } = req.query;

    // Find teacher by user account
    const teacher = await Teacher.findOne({ userAccount: userId });

    // Validation: Check if teacher exists
    if (!teacher) {
      return errorResponse(res, 404, "Teacher profile not found.");
    }

    // Get list of classes this teacher is assigned to
    let classes = teacher.classesAssigned;

    // If classLevel filter is provided, filter by that class
    if (classLevel) {
      classes = classes.filter((c) => c.class === classLevel);
    }

    // If teacher has no assigned classes, return empty list
    if (classes.length === 0) {
      return successResponse(res, 200, "No students found", { students: [] });
    }

    // Extract class names
    const classNames = classes.map((c) => c.class);

    // Find all students in teacher's assigned classes
    const students = await Student.find({ class: { $in: classNames } })
      .populate("parent", "name email")
      .populate("userAccount", "email");

    return successResponse(
      res,
      200,
      "Assigned students retrieved successfully",
      { students, classesAssigned: classes }
    );
  } catch (error) {
    console.error("Get assigned students error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving assigned students. Please try again."
    );
  }
};

/**
 * GET TEACHER BY ID
 * 
 * Admin retrieves specific teacher details
 * 
 * URL parameter:
 * - teacherId: ObjectId
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { teacher }
 * }
 */
export const getTeacherById = async (req, res) => {
  try {
    const { teacherId } = req.params;

    // Find teacher by ID
    const teacher = await Teacher.findById(teacherId).populate(
      "userAccount",
      "email"
    );

    // Validation: Check if teacher exists
    if (!teacher) {
      return errorResponse(res, 404, "Teacher not found.");
    }

    return successResponse(res, 200, "Teacher retrieved successfully", {
      teacher,
    });
  } catch (error) {
    console.error("Get teacher by ID error:", error);
    return errorResponse(res, 500, "Error retrieving teacher. Please try again.");
  }
};

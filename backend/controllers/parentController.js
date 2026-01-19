import User from "../models/user.js";
import Student from "../models/student.js";
import { errorResponse, successResponse } from "../utils/errorHandler.js";

/**
 * GET MY CHILD DATA
 * 
 * Parent can ONLY view data of their linked child
 * Secure: Uses linkedStudent from JWT token (req.user.id)
 * 
 * This ensures parents cannot access other students' data
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { student profile }
 * }
 */
export const getMyChild = async (req, res) => {
  try {
    // req.user.id is parent's user ID (from JWT token)
    const parentId = req.user.id;

    // Find parent user
    const parent = await User.findById(parentId);

    // Validation: Check if parent exists
    if (!parent || parent.role !== "parent") {
      return errorResponse(res, 403, "Only parents can access this resource.");
    }

    // Validation: Check if parent has linked student
    if (!parent.linkedStudent) {
      return errorResponse(
        res,
        404,
        "No linked student found. Please contact admin."
      );
    }

    // Fetch student details using linkedStudent reference
    const student = await Student.findById(parent.linkedStudent)
      .populate("userAccount", "email")
      .populate("classTeacher", "name subject");

    // Validation: Check if student exists
    if (!student) {
      return errorResponse(
        res,
        404,
        "Student not found. Please contact admin."
      );
    }

    return successResponse(
      res,
      200,
      "Child profile retrieved successfully",
      { student }
    );
  } catch (error) {
    console.error("Get my child error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving child profile. Please try again."
    );
  }
};

/**
 * Link Parent to Child
 * 
 * Admin creates link between parent and existing student
 * 
 * Request body:
 * {
 *   parentId: ObjectId,
 *   studentId: ObjectId
 * }
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string
 * }
 */
export const linkParentToStudent = async (req, res) => {
  try {
    const { parentId, studentId } = req.body;

    // Validation: Check if both IDs are provided
    if (!parentId || !studentId) {
      return errorResponse(res, 400, "Both parentId and studentId are required.");
    }

    // Find parent user
    const parent = await User.findById(parentId);
    if (!parent || parent.role !== "parent") {
      return errorResponse(res, 400, "Parent not found or invalid.");
    }

    // Find student
    const student = await Student.findById(studentId);
    if (!student) {
      return errorResponse(res, 400, "Student not found.");
    }

    // Link parent to child in User model
    await User.findByIdAndUpdate(parentId, {
      linkedStudent: studentId,
    });

    // Link parent to child in Student model
    await Student.findByIdAndUpdate(studentId, {
      parent: parentId,
    });

    return successResponse(
      res,
      200,
      "Parent linked to student successfully"
    );
  } catch (error) {
    console.error("Link parent to student error:", error);
    return errorResponse(
      res,
      500,
      "Error linking parent to student. Please try again."
    );
  }
};

/**
 * GET PARENT PROFILE
 * 
 * Parent can view their own profile info
 * 
 * Response:
 * {
 *   success: boolean,
 *   message: string,
 *   data: { parent info, linkedStudent }
 * }
 */
export const getMyProfile = async (req, res) => {
  try {
    const parentId = req.user.id;

    // Find parent with populated linkedStudent
    const parent = await User.findById(parentId).populate(
      "linkedStudent",
      "name rollNumber class section"
    );

    // Validation: Check if parent exists
    if (!parent) {
      return errorResponse(res, 404, "Parent profile not found.");
    }

    return successResponse(res, 200, "Parent profile retrieved successfully", {
      parent: {
        id: parent._id,
        name: parent.name,
        email: parent.email,
        role: parent.role,
        linkedStudent: parent.linkedStudent,
      },
    });
  } catch (error) {
    console.error("Get parent profile error:", error);
    return errorResponse(
      res,
      500,
      "Error retrieving parent profile. Please try again."
    );
  }
};

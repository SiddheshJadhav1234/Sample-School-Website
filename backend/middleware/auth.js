import jwt from "jsonwebtoken";
import { errorResponse } from "../utils/errorHandler.js";

/**
 * JWT Verification Middleware
 * 
 * This middleware:
 * 1. Checks if token exists in request headers
 * 2. Verifies the token using JWT_SECRET
 * 3. Attaches decoded user info to req.user
 * 4. Passes control to next middleware/route
 * 
 * Token should be sent in Authorization header as:
 * Authorization: Bearer <token>
 */
export const verifyToken = (req, res, next) => {
  try {
    // Get token from Authorization header
    // Format: "Bearer <token>"
    const token = req.headers.authorization?.split(" ")[1];

    // If no token found, return error
    if (!token) {
      return errorResponse(res, 401, "No token provided. Please login first.");
    }

    // Verify token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to req.user
    // decoded contains: { id, role }
    req.user = decoded;

    // Continue to next middleware/route
    next();
  } catch (error) {
    // Handle token errors
    if (error.name === "TokenExpiredError") {
      return errorResponse(res, 401, "Token has expired. Please login again.");
    }

    if (error.name === "JsonWebTokenError") {
      return errorResponse(res, 401, "Invalid token. Please login again.");
    }

    return errorResponse(res, 500, "Token verification failed.");
  }
};

/**
 * Role-Based Access Control (RBAC) Middleware
 * 
 * Restricts route access based on user role
 * Usage: router.get('/admin-only', authorize(['admin']), controller);
 * 
 * @param {Array<string>} allowedRoles - Array of roles that can access this route
 * Example: ['admin'], ['teacher', 'admin'], ['student', 'parent']
 */
export const authorize = (allowedRoles) => {
  return (req, res, next) => {
    try {
      // Check if user info exists (verifyToken should run first)
      if (!req.user) {
        return errorResponse(
          res,
          401,
          "User not authenticated. Please login first."
        );
      }

      // Check if user's role is in allowed roles
      if (!allowedRoles.includes(req.user.role)) {
        return errorResponse(
          res,
          403,
          `Access denied. Only ${allowedRoles.join(", ")} can access this resource.`
        );
      }

      // User is authorized, continue
      next();
    } catch (error) {
      return errorResponse(res, 500, "Authorization check failed.");
    }
  };
};

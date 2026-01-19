/**
 * Centralized Error Response Handler
 * Ensures all error responses follow a consistent format
 * This makes it easier to handle errors on the frontend
 */

// Standard error response format
export const errorResponse = (res, statusCode, message, details = null) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
    ...(details && { details }), // Include details only if provided
  });
};

// Standard success response format
export const successResponse = (res, statusCode, message, data = null) => {
  return res.status(statusCode).json({
    success: true,
    message: message,
    ...(data && { data }), // Include data only if provided
  });
};

// Handle async errors (wraps async route handlers)
// Usage: router.post('/route', asyncHandler(async (req, res) => { ... }))
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

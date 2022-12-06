const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (token == null ) {
    return next(new ErrorHandler("Please, login to Access this Resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);


  req.user = await User.findById(decodedData.id);

  next();
});

exports.forRoutineCheck = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (token == null ) {
    return 
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);


  req.user = await User.findById(decodedData.id);

  next();
});



exports.authorixedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to Access this Resource!`,
          403
        )
      );
    }
    next();
  };
};

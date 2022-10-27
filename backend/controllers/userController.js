const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/JWTtoken");
const sendEmail = require("../utils/sendEmail");
const crypto = require('crypto')
// register user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "demo id is here",
      url: "demo url is here",
    },
  });

  sendToken(user, 201, res);
});

// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("invalid Email or Password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});

// logout user
exports.logOut = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expiresIn: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// forgot password
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const {email} = req.body;
  const user = await User.findOne({email});

  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  // reset token getting and saving
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Yout password reset token is:- \n\n ${resetPasswordURL} \n\n if you have not requested this request then please ignore it!!! `;

  try {
    await sendEmail({
      email: user.email, 
      subject: `Buy up password Recovery`,
      message, 
    });
    res.status(200).json({ 
      success: true,
      message: `Email sent to ${req.body.email} successfully`,
    }); 
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});



// reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    // creating token hash
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    })

    if (!user) {
        return next(new ErrorHandler("invalid Reset Password token", 400));
    }

    if(req.body.password !== req.body.confirmPassword)
    {
        return next(new ErrorHandler("password doesn't match!", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save()
   
    sendToken(user,200,res)
})


// user details
exports.userDetails = catchAsyncErrors(async(req,res,next)=>{

  const user = await User.findById(req.user.id)
  res.status(200).json({
    success:true,
    user
  })
})

// user update password
exports.updatePassword = catchAsyncErrors(async(req,res,next)=>{

  const user = await User.findById(req.user.id).select('+password')


  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("old Password is incorrect", 400));
  }

  if(req.body.newPassword !== req.body.confirmPassword)
  {
    return next(new ErrorHandler("Password doesn't match!", 400)); 
  }

  user.password = req.body.newPassword;
  await user.save()

  sendToken(user,200,res)
})
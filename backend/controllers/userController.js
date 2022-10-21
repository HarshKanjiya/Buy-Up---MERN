const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require('../models/userModel');
const sendToken = require("../utils/JWTtoken");




// register user
exports.registerUser = catchAsyncErrors( async(req,res,next) => {

    const {name,email,password} = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"demo id is here",
            url:"demo url is here"
        }
    })

    sendToken(user,201,res)
})


// login user
exports.loginUser = catchAsyncErrors( async(req,res,next) => {

    const {email,password} = req.body;

    if(!email || !password)
    {
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user)
    {
        return next(new ErrorHandler("invalid Email or Password",401))
    }

    const isPasswordMatched =await user.comparePassword(password);

    if(!isPasswordMatched)
    {
        return next(new ErrorHandler("invalid Email or Password",401))
    }
    sendToken(user,200,res)
})

// logout user
exports.logOut = catchAsyncErrors(async(req,res,next)=>{

    res.cookie("token",null,{
        expiresIn: new Date(Date.now()),
        httpOnly:true
        })
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})
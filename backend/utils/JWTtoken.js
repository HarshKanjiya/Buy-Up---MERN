
// creating token and saving in cookie
const sendToken = (user,statusCode,res)=> {
    const token = user.getJWTToken();

    // options
    const options = {
        expiresIn: new Date( Date.now() + process.nextTick.COOKIE_EXPIRE *24*60*60*1000),
        httpOnly:true
    }

    res.status(statusCode).cookie('token',token,options).json({
        success:true,
        user,
        token
    })
}

module.exports = sendToken
// creating token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options
  const options = {
    expires : new Date(
      Date.now() + 432000000
    ),
    httpOnly: true,
    secure:true,
    sameSite: "none"
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;

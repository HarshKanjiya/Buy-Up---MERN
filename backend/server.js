const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDataBase = require("./config/database");

//  handlin uncaught exeptions
process.on("uncaughtException", (err) => {
  console.log("Error : ", err.message);
  console.log("shutting down server due to uncaught Exeption");

  server.close(() => {
    process.exit(1);
  });
});

//config
dotenv.config({ path: "./backend/config/config.env" });

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}
//database
connectDataBase();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost: ${process.env.PORT}`);
});

// unhandled promish rejection
process.on("unhandledRejection", (err) => {
  console.log("Error : ", err.message);
  console.log("shutting down server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});




const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

const errorMiddleWare = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());
app.use(
  cors({
    // origin: ["http://127.0.0.1:5173"],
    credentials: true
  })
);

//Routes imports
const products = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

// middleware for error
app.use(errorMiddleWare);

module.exports = app;

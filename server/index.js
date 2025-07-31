const express = require("express");
const userRoute = require("./routes/users");
const { connectToMongoDb } = require("./connect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly } = require("./middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("", userRoute);

connectToMongoDb("mongodb://localhost:27017/e-commerce").then(() =>
  console.log("Db connected")
);

app.listen(PORT, () => console.log(`server connected at ${PORT}`));

const express = require("express");
const userRoute = require("./routes/users");
const { connectToMongoDb } = require("./connect");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.use("", userRoute);

connectToMongoDb("mongodb://localhost:27017/e-commerce").then(() =>
  console.log("Db connected")
);

app.listen(PORT, () => console.log(`server connected at ${PORT}`));

const express = require("express");
const { handleUserCreation, handleLogin } = require("../controllers/users");
const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store files in the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});
const upload = multer({ storage });

router.post("/signup", upload.single("image"), handleUserCreation);
router.post("/login", handleLogin);

module.exports = router;

const express = require("express");
const {
  handleUserCreation,
  handleLogin,
  handleUserupdate,
  handleGetInfo,
  handleUserData,
  handleDelete,
  handleGetItems,
  handleAddItems,
  handleDeleteItem,
} = require("../controllers/users");
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

//users route
router.post("/signup", upload.single("image"), handleUserCreation);
router.patch("/update", upload.single("image"), handleUserupdate);
router.post("/login", handleLogin);
router.post("/getinfo", upload.single("image"), handleGetInfo);
router.get("/userdata", handleUserData);
router.post("/delete", handleDelete);

//items route
router.post("/deleteitem", handleDeleteItem);
router.get("/getitems", handleGetItems);
router.post("/additems", upload.array("images", 10), handleAddItems);

module.exports = router;

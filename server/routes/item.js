// const express = require("express");

// const {
//   handleGetItems,
//   handleAddItems,
//   handleDeleteItem,
//   handleGetItemInfo,
//   handleItemupdate,
// } = require("../controllers/item");
// const multer = require("multer");

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Store files in the 'uploads' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   },
// });
// const upload = multer({ storage });

// //items route
// router.post("/deleteitem", handleDeleteItem);
// router.get("/getitems", handleGetItems);
// router.post("/additems", upload.array("images", 10), handleAddItems);
// router.post("/getiteminfo", upload.single("image"), handleGetItemInfo);
// router.patch("/updateitem", upload.array("images", 10), handleItemupdate);

// module.exports = router;

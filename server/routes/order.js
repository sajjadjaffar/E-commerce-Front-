// const express = require("express");

// const {
//   handleOrder,
//   handleCart,
//   handleCartInfo,
//   handlequantityupdate,
// } = require("../controllers/order");

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

// //order route
// router.post("/order", handleOrder);
// router.post("/cart", handleCart);
// router.post("/cartinfo", handleCartInfo);
// router.post("/update-cart-quantity", handlequantityupdate);

// module.exports = router;

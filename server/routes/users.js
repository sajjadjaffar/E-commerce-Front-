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
  handleGetItemInfo,
  handleItemupdate,
  handleOrder,
  handleCart,
  handleCartInfo,
  handlequantityupdate,
  handleDeleteCart,
  handleUsersOrders,
  handleOrdersStatus,
  handleShowOrderStatus,
} = require("../controllers/users");

const multer = require("multer");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
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
router.post("/getiteminfo", upload.single("image"), handleGetItemInfo);
router.patch("/updateitem", upload.array("images", 10), handleItemupdate);

//order route
router.post("/order", handleOrder);
router.post("/cart", handleCart);
router.post("/cartinfo", handleCartInfo);
router.post("/update-cart-quantity", handlequantityupdate);
router.post("/emptycart", handleDeleteCart);
router.get("/orders", handleUsersOrders);
router.put("/orders/:id", handleOrdersStatus);
router.put("/orders/:id", handleOrdersStatus);
router.get("/orders/user/:userId", handleShowOrderStatus);

module.exports = router;

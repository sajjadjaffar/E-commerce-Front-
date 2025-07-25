const express = require("express");
const { handleUserCreation, handleLogin } = require("../controllers/users");
const usersSchema = require("../models/users");

const router = express.Router();

router.post("/signup", handleUserCreation);
router.post("/users", handleLogin);

module.exports = router;

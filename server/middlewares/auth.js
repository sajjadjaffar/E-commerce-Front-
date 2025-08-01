const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies.uid;

  if (!userUid) return res.redirect("/login");
  const user = getUser(userUid);

  if (!user) return res.redirect("/login");
  req.user = user;
  next();
}
// validators/userValidators.js
// const { body } = require("express-validator");

// const updateUserValidator = [
//   body("oldEmail").isEmail().withMessage("Old email is invalid"),
//   body("email_").optional().isEmail().withMessage("New email is invalid"),
//   body("first_Name").optional().isString(),
//   body("last_Name").optional().isString(),
//   body("gender_").optional().isIn(["male", "female", "other"]),
//   body("address_").optional().isString(),
//   body("phoneNumber_").optional().isMobilePhone(),
// ];

module.exports = { restrictToLoggedinUserOnly };

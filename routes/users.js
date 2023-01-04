const express = require("express");

const { users } = require("../data/users.json");
const { UserModel, BookModel } = require("../models");
const {
  getAllUsers,
  getSingleUserById,
  deleteUser,
  updateUserById,
  createNewUser,
  getSubscriptionDetailsById,
} = require("../controllers/user_controller");

const router = express.Router();

//getting all the users
router.get("/", getAllUsers);

//getting single user by id
router.get("/:id", getSingleUserById);

//creating new user
router.post("/", createNewUser);

//updating user
router.put("/:id", updateUserById);

//deleting user by id
router.delete("/:id", deleteUser);

router.get("/subscription-details/:id", getSubscriptionDetailsById);

//default export
module.exports = router;

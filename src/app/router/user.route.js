const express = require("express");
const router = express.Router();

const userController = require("../controller/user.controller");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserDetails);
router.post("/", userController.registerUser);

module.exports = router;

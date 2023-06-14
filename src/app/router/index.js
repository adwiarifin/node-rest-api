const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const orderRoute = require("./order.route");

router.use("/user", userRoute);
router.use("/order", orderRoute);

module.exports = router;

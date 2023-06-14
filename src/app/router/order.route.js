const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get /order");
});

router.post("/", (req, res) => {
  res.send("post /order");
});

module.exports = router;

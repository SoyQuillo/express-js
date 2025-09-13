const express = require('express')


const router = express.Router()

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

router.get("/UserName", (req, res) => {
  res.send("username route");
});

module.exports = router;

const express = require('express');

  const router = express.Router();


router.all("/about", (req, res) => {
  res.send("about page");
});

router.get("/dashboard", (req, res) => {
  res.sendFile("dashboard page");
});

module.exports = router


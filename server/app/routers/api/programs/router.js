const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/programActions");

router.get("/", (req, res) => {
  browse(req, res);
});
router.get("/:id", (req, res) => {
  read(req, res);
});
router.post("/", (req, res) => {
  add(req, res);
});

module.exports = router;

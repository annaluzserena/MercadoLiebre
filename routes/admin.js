const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/admin");

router.get("/", adminMiddleware, adminController.index);

module.exports = router;
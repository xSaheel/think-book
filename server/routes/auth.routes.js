const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const { postLoginController, postRegisterController, getUserDataController } = require("../controllers/auth.controllers");

router.post("/login", postLoginController);
router.post("/register", postRegisterController);
router.get("/user", authMiddleware, getUserDataController);

module.exports = router;
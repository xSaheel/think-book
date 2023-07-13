const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const { getAllPostsController, getPostByIdController, postPublishPostController } = require("../controllers/post.controllers")

router.get("/:postId", getPostByIdController);
router.get("/", getAllPostsController);
router.post("/", authMiddleware, postPublishPostController);

module.exports = router;
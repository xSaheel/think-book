const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const { getAllPostsController, getPostByIdController, postPublishPostController, postLikePostController } = require("../controllers/post.controllers")

router.get("/:postId", getPostByIdController);
router.get("/", getAllPostsController);
router.post("/", authMiddleware, postPublishPostController);
router.post("/like", authMiddleware, postLikePostController);

module.exports = router;
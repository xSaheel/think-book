const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const { 
    getAllPostsController, 
    getPostByIdController, 
    deletePostByIdController,
    postPublishPostController, 
    postLikePostController, 
    postReplyPostController,
    getAllRepliesController 
} = require("../controllers/post.controllers")

router.get("/", getAllPostsController);
router.post("/", authMiddleware, postPublishPostController);
router.get("/:postId", getPostByIdController);
router.delete("/:postId", deletePostByIdController);
router.get("/:postId/reply", getAllRepliesController);
router.post("/:postId/reply", authMiddleware, postReplyPostController);
router.post("/:postId/like", authMiddleware, postLikePostController);

module.exports = router;
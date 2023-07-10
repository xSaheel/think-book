const express = require("express");
const router = express.Router();
const { getAllPostsController, getPostByIdController, postPublishPostController } = require("../controllers/post.controllers")

router.get("/", getAllPostsController);
router.post("/", postPublishPostController);
router.get("/:id", getPostByIdController);

module.exports = router;
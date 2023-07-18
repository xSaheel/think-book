const Post = require("../models/post.model");
const { User } = require("../models/user.model");

exports.getAllPostsController = async (req, res) => {
    try {
        const posts = await Post.find().sort({ time_posted: -1 })
        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

exports.getPostByIdController = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId);
        return res.status(200).json({
            success: true,
            data: post
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

exports.postPublishPostController = async (req, res) => {
    try {
        const { userId } = req.user;
        const user = await User.findById(userId);
        const post = await Post.create({ ...req.body, user });
        return res.status(201).json({
            success: true,
            data: post
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}
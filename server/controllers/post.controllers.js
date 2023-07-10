const Post = require("../models/post.model");

exports.getAllPostsController = async (req, res) => {
    try {
        const posts = await Post.find()
        return res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.getPostByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id)
        return res.status(200).json({
            success: true,
            data: post
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.postPublishPostController = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        // const post = new Post(req.body);
        // await post.save();
        return res.status(201).json({
            success: true,
            data: post
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: req.body
        })
    }
}
const Post = require("../models/post.model");
const Reply = require("../models/reply.model");
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

exports.deletePostByIdController = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findByIdAndDelete(postId);

        if (!post) {
            return res.status(404).json({ 
                success: false, 
                message: 'Post not found' 
            });
        }
        return res.status(200).json({
            success: true,
            message: "Post deleted successfully"
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

exports.postLikePostController = async (req, res) => {
    try {
        const { userId } = req.user;
        const { postId } = req.params;
        if(!postId) {
            return res.status(400).json({
                success: false,
                message: "PostId is required"
            })
        }
        const post = await Post.findById(postId);
        if(!post) {
            return res.status(400).json({
                success: false,
                message: "Post not found"
            })
        }
        const { likes = [] } = post;
        const alreadyLiked = likes.includes(userId);
        const updatedLikes = alreadyLiked ? likes.filter((uid) => uid !== userId) : [...likes, userId]
        const updatedPost = await Post.findOneAndUpdate({ _id: postId }, { 
            likes: updatedLikes
        }, { new: true });

        return res.status(200).json({
            success: true,
            message: alreadyLiked ? "Post Unliked" : "Post liked",
            data: updatedPost
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
}

exports.postReplyPostController = async (req, res) => {
    try {
        const { userId } = req.user;
        const { postId } = req.params;
        const user = await User.findById(userId);
        const parentPost = await Post.findById(postId);
        const reply = await Reply.create({ ...req.body, user: user._id });

        parentPost.replies.push(reply);
        await parentPost.save();
        await reply.populate("user");

        return res.status(201).json({
            success: true,
            data: reply
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    } 
}

exports.getAllRepliesController = async (req, res) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId).populate("replies");
        await post.populate("replies.user");
        return res.status(201).json({
            success: true,
            data: post.replies
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    } 
}
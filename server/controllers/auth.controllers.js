const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.getUserDataController = async (req, res) => {
    try {
        const { userId } = req.user;
        const user = await User.findOne({ _id: userId });
        return res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
};

exports.postLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(401).json({
                success: false,
                message: "User with this email doesn't exist!"
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if(!isPasswordMatched) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const accessToken = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "30d"
        })

        return res.status(200).json({
            success: true,
            message: "User logged in successfully!",
            accessToken
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
};

exports.postRegisterController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isExistingUser = await User.findOne({ email });
        if(isExistingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }
        const saltRounds = 10;
        const encryptedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({ ...req.body, password: encryptedPassword });
        await user.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully!"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        })
    }
};
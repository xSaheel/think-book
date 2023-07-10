const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
    const bearerToken = req.headers.authorization;

    if(!bearerToken) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    // `Bearer ${accessToken}` format
    const accessToken = bearerToken.split(" ")[1];
    try {
        const decodedToken = await jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = decodedToken;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        res.status(401).json({
            success: false,
            message: "Invalid Token"
        })
    }
}
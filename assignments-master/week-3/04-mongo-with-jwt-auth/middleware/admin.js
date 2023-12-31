const jwt = require('jsonwebtoken');
// const SECRET_KEY = require('../index');
const SECRET_KEY = 'this is secret key';

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // const token = req.headers.authorization;
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log("🚀 ~ file: admin.js:11 ~ adminMiddleware ~ token:", token);

    const adminDetails = await jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: 'Unauthorized: Token not provided'
            })
        }
        if (decoded.username) {
            next();
        } else {
            res.status(401).json({
                message: 'Admin Not Authenticated'
            });
        }
    });


}

module.exports = adminMiddleware;
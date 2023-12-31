const { Admin } = require('../db');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

    const adminDetails = await Admin.findOne({
        username, password
    });

    if (adminDetails) {
        next();
    } else {
        res.status(401).json({
            message: 'Admin Not Authenticated'
        });
    }

}

module.exports = adminMiddleware;
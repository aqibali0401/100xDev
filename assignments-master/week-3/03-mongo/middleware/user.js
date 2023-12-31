const { User } = require('../db');


async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers;

    await User.findOne({
        username, password
    });

    if (username && password) {
        req.username = username;
        next();
    } else {
        res.status(401).json({
            msg: 'User Not Authenticated'
        });
    }
}

module.exports = userMiddleware;
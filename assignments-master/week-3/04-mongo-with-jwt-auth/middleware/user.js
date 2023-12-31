const jwt = require('jsonwebtoken');
// const SECRET_KEY = require('../index');
const SECRET_KEY = 'this is secret key';

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // const token = req.headers.authorization;
    const token = req.headers.authorization.replace('Bearer ', '');

    await jwt.verify(token, SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: 'Unauthorized: Token not provided'
            })
        }
        if (decoded.username) {
            req.username = decoded.username;
            next();
        } else {
            res.status(401).json({
                message: 'User Not Authenticated'
            });
        }
    });
}

module.exports = userMiddleware;
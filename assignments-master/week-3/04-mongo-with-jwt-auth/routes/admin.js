const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const SECRET_KEY = 'this is secret key';
const { Admin, Course } = require('../db');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    await Admin.create({
        username,
        password
    });
    res.status(200).json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    try {
        // Implement admin signup logic
        const { username, password } = req.body;

        const adminPresentInDb = await Admin.findOne({
            username,
            password
        });
        console.log("🚀 ~ file: admin.js:33 ~ router.post ~ SECRET_KEY:", SECRET_KEY)

        if (adminPresentInDb) {
            const token = jwt.sign({ username }, SECRET_KEY)
            res.status(200).json({
                token
            })
        } else {
            res.status(404).json({
                message: 'Invalid username or password'
            })
        }

    } catch (error) {
        console.log("🚀 ~ file: admin.js:27 ~ router.post ~ error:", error);
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        // Implement course creation logic
        const { title, description, price, imageLink } = req.body;

        await Course.create({
            title, description, price, imageLink
        });

        res.status(200).json({
            message: "Course created successfully"
        })
    } catch (error) {
        console.log("🚀 ~ file: admin.js:25 ~ router.post ~ error:", error);
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses
    })
});

module.exports = router;
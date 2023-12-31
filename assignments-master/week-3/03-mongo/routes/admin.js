const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    console.log("🚀 ~ file: admin.js:10 ~ router.post ~ username:", username)
    await Admin.create({
        username,
        password
    });
    res.status(200).json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
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
    const courses = await Course.find();
    res.status(200).json({
        courses
    })
});

module.exports = router;
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require('../db');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    await User.create({
        username, password
    });
    res.status(200).json({
        message: 'User created successfully'
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    res.status(200).json({
        Output: allCourses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const course = await Course.findOne({
        _id: req.params.courseId
    });
    if (course) {
        const userUpdateStatus = await User.updateOne({
            username: req.username,
        }, {
            '$push': {
                purchasedCourses: course._id
            }
        });
    }
    res.status(200).json({
        message: 'Course purchased successfully'
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const userDetails = await User.findOne({
        username: req.username,
    });
    res.status(200).json({
        purchasedCourses: userDetails.purchasedCourses
    })

});

module.exports = router
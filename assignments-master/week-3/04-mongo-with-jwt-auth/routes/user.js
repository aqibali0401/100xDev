const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');
const jwt = require("jsonwebtoken");
const SECRET_KEY = 'this is secret key';

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

router.post('/signin', async (req, res) => {
    try {
        // Implement admin signup logic
        const { username, password } = req.body;

        const userPresentInDb = await User.findOne({
            username,
            password
        });

        if (userPresentInDb) {
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
    console.log("🚀 ~ file: user.js:62 ~ router.post ~ course:", course)
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
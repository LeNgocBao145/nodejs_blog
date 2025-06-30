const courseController = require('../app/controllers/CourseController');
const express = require('express');
const router = express.Router();

router.get('/:slug', courseController.show);
// router.get('/', courseController.index);

module.exports = router;

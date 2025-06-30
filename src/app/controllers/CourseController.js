const Courses = require('../../app/models/Course');
const { mongooseToObject } = require('../../util');

class CourseController {
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new CourseController();

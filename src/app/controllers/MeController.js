const Course = require('../../app/models/Course');
const Courses = require('../../app/models/Course');
const { mongooseToObject, multiMongooseToObject } = require('../../util');

class MeController {
    storedCourses(req, res, next) {
        Courses.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    update(req, res, next) {}
}

module.exports = new MeController();

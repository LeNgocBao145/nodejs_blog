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

    trashCourses(req, res, next) {
        Courses.findDeleted({ deletedAt: { $ne: null } })
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();

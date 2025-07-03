const Courses = require('../models/Course');
const { mongooseToObject, multiMongooseToObject } = require('../../util');

class MeController {
    storedCourses(req, res, next) {
        Promise.all([
            Courses.find({}).sortable(req),
            Courses.countDocumentsWithDeleted({ deleted: true }),
        ])
            .then(([courses, deletedCourseCount]) => {
                res.render('me/stored-courses', {
                    deletedCourseCount,
                    courses: multiMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    trashCourses(req, res, next) {
        Promise.all([
            Courses.findDeleted({ deletedAt: { $ne: null } }).sortable(req),
            Courses.countDocuments({ deleted: false }),
        ])
            .then(([courses, existCourseCount]) =>
                res.render('me/trash-courses', {
                    existCourseCount,
                    courses: multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();

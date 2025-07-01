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

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/maxresdefault.jpg`;
        const newCourse = new Courses(formData);
        newCourse
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
        console.log('Create new course successfully!!!');
    }

    edit(req, res, next) {
        Courses.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    update(req, res, next) {
        Courses.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();

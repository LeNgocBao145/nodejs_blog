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

    delete(req, res, next) {
        Courses.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    deleteForever(req, res, next) {
        Courses.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }

    restore(req, res, next) {
        Courses.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }

    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Courses.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next);
                break;
            default:
                res.status(400).send('Error!!!');
        }
    }
}

module.exports = new CourseController();

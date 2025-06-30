const Courses = require('../../app/models/Course');
const util = require('../../util');

class SiteController {
    async home(req, res, next) {
        // try {
        //     const course = await Courses.find({});
        //     res.json(course);
        // } catch (err) {
        //     res.json({ error: 'ERROR!!!' });
        // }

        Courses.find({})
            .then((courses) =>
                res.render('home', {
                    courses: util.multiMongooseToObject(courses),
                }),
            )
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

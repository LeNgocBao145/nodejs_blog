const Courses = require('../../app/models/Course');

class SiteController {
    async home(req, res) {
        try {
            const course = await Courses.find({});
            res.json(course);
        } catch (err) {
            res.json({ error: 'ERROR!!!' });
        }
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

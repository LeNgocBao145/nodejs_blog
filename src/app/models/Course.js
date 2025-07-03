const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        // createDate: { type: Date, default: Date.now },
        // modifiedDate: { type: Date, default: Date.now },
    },
    { timestamps: true },
);

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

Course.query.sortable = function (req) {
    if ('_sort' in req.query) {
        return this.sort({ [req.query.column]: req.query.type });
    }
    return this;
};

module.exports = mongoose.model('Course', Course);

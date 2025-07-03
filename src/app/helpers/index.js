const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortTypeBtn: (field, sort) => {
        const typeSort = sort.column === field ? sort.type : 'default';

        const icons = {
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
            default: 'oi oi-elevator',
        };

        const types = {
            asc: 'desc',
            desc: 'asc',
            default: 'desc',
        };

        const href = Handlebars.escapeExpression(
            `?_sort&column=${field}&type=${types[typeSort]}`,
        );

        const output = `<a href="${href}"><span class="${icons[typeSort]}"></span></a>`;
        return new Handlebars.SafeString(output);
    },
};

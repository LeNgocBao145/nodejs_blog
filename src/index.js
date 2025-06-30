const express = require('express');
const path = require('path');
const route = require('./resources/routes/index');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',

    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

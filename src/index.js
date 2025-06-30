const express = require('express');
const path = require('path');
const route = require('./routes/index');
// const morgan = require('morgan');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const db = require('./config/db');
const app = express();
const port = 3000;

//Connect Database
db.connect();

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

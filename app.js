let express = require('express');
let app = express();

// register the template engine
app.set('view engine', 'pug');


// set morgan log
let morgan = require('morgan');
app.use(morgan('dev'));

// set route
let statusRouter = require('./modules/status/router');
app.use('/', statusRouter);

module.exports = app;

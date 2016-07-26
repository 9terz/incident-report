'use strict';

let express = require('express');
let app = express();
app.set('view engine', 'pug'); // register the template engine

let morgan = require('morgan');
app.use(morgan('dev'));
let statusRouter = require('./modules/status/router');
app.use('/', statusRouter);

module.exports = app;

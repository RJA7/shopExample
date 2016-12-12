var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));


module.exports = app;

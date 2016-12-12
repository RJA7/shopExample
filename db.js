var mongoose = require('mongoose');

mongoose.connect('127.0.0.1', 'test', '27017');

var db = mongoose.connection;

db.on('connected', function () {
    console.log('DB Connected');
});

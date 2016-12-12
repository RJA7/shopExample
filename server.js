var http = require('http');
var app = require('./app');
require('./db');

var server = http.createServer(app).listen(3000);

server.on('listening', function () {
    console.log('Server started');
});

server.on('error', function (err) {
    console.log(err);
});

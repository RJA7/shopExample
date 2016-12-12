var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uuid = require('node-uuid');

var UserSchema = Schema({
    _id: {type: String, default: uuid.v4},
    name: {type: String, required: true},
    age: Number
});

var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;

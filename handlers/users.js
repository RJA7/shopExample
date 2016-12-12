var UserModel = require('../models/users');

module.exports = exports = {};

exports.getUser = function (req, res, next) {
    var query = req.query; // {age: 21}

    UserModel.find(query, function (err, users) {
        if (err) {
            return next(err);
        }
        
        res.status(200).send(users);
    });
};

exports.saveUser = function (req, res, next) {
    var user = req.body;
    
    UserModel.create(user, function (err, user) {
        if (err) {
            return next(err);
        } 
        
        res.status(201).send(user);
    });
};

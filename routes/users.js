var router = require('express').Router();
var userHandler = require('../handlers/users');

router.get('/users', userHandler.getUser);
router.post('/users', userHandler.saveUser);

module.exports = router;

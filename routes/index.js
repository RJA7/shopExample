var router = require('express').Router();
var userRouter = require('./users');

router.use(userRouter);
// router.use(categoryRouter);

module.exports = router;

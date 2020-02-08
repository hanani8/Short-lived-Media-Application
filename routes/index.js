var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexContoller')

/* GET home page. */
router.get('/', indexController.stories);

module.exports = router;

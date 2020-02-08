var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexContoller')

/* GET users listing. */
router.post('/', indexController.postStory);

module.exports = router;

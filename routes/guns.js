var express = require('express');
const guns_controlers= require('../controllers/guns');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('guns', { title: 'Search Results guns' });
});*/

router.get('/', guns_controlers.guns_view_all_Page)

module.exports = router;
var express = require('express');
const guns_controlers= require('../controllers/guns');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('guns', { title: 'Search Results guns' });
});*/

router.get('/', guns_controlers.guns_view_all_Page)

/* GET detail guns page */
router.get('/detail', guns_controlers.guns_view_one_Page);

/* GET create guns page */
router.get('/create', guns_controlers.guns_create_Page);

/* GET create update page */
router.get('/update', guns_controlers.guns_update_Page);

/* GET delete costume page */
router.get('/delete', guns_controlers.guns_delete_Page);

module.exports = router;


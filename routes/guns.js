var express = require('express');
const guns_controlers= require('../controllers/guns');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('guns', { title: 'Search Results guns' });
});*/


// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

router.get('/', guns_controlers.guns_view_all_Page)

/* GET detail guns page */
router.get('/detail',secured, guns_controlers.guns_view_one_Page);

/* GET create guns page */
router.get('/create',secured, guns_controlers.guns_create_Page);

/* GET create update page */
router.get('/update',secured, guns_controlers.guns_update_Page);

/* GET delete costume page */
router.get('/delete',secured, guns_controlers.guns_delete_Page);

module.exports = router;


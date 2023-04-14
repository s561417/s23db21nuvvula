var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var guns_controller = require('../controllers/guns');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/guns', guns_controller.guns_create_post);
// DELETE request to delete Costume.
router.delete('/guns/:id', guns_controller.guns_delete);
// PUT request to update Costume.
router.put('/guns/:id', guns_controller.guns_update_put);
// GET request for one Costume.
router.get('/guns/:id', guns_controller.guns_detail);
// GET request for list of all Costume items.
router.get('/guns', guns_controller.guns_list);
module.exports = router;
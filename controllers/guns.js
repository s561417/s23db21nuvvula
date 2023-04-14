var guns = require('../models/guns');
// List of all Costumes
exports.guns_list = async function(req, res) {
    try{
        theGuns = await guns.find();
        res.send(theGuns);
    }catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
     } 
};
// for a specific Costume.
exports.guns_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: guns detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.guns_create_post = async function(req, res) {
    console.log(req.body)
    let document = new guns();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.guns_color = req.body.color;
    document.guns_range = req.body.range;
    document.guns_cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle Costume delete form on DELETE.
exports.guns_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: guns delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.guns_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: guns update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.guns_view_all_Page = async function(req, res) {
    try{
        theGuns = await guns.find();
        res.render('guns', { title: 'guns Search Results', guns: theGuns });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
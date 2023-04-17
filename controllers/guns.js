var guns = require('../models/guns');
// List of all gunss
exports.guns_list = async function(req, res) {
    try{
        theGuns = await guns.find();
        res.send(theGuns);
    }catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
     } 
};
// for a specific guns.
// for a specific guns.
exports.guns_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await guns.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle guns create on POST.
exports.guns_create_post = async function(req, res) {
    console.log(req.body)
    let document = new guns();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"guns_type":"goat", "cost":12, "size":"large"}
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
// Handle guns delete form on DELETE.
exports.guns_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: guns delete DELETE ' + req.params.id);
};
// Handle guns update form on PUT.
exports.guns_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await guns.findById( req.params.id)
 // Do updates of properties
 if(req.body.guns_color)
 toUpdate.guns_color = req.body.guns_color;
 if(req.body.guns_range) toUpdate.guns_range = req.body.guns_range;
 if(req.body.guns_cost) toUpdate.guns_cost = req.body.guns_cost;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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
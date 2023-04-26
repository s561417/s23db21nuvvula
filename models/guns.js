const mongoose = require("mongoose")
const gunsSchema = mongoose.Schema({
    guns_color: {type: String, minlength: 1, maxlength: 50},
    guns_range: {type: String, minlength: 1, maxlength: 50},
    guns_cost: {type: String, minlength: 1, maxlength: 50}
})
module.exports = mongoose.model("Guns",gunsSchema)
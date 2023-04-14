const mongoose = require("mongoose")
const gunsSchema = mongoose.Schema({
    guns_color: String,
    guns_range: String,
    guns_cost: String
})
module.exports = mongoose.model("Guns",gunsSchema)
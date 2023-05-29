const mongoose = require("mongoose")
const CategorySchema = mongoose.Schema({
    nomCategory: { type: String, required: true, unique: true },
    imageCategory: { type: String, required: false }
})
module.exports = mongoose.model('Category', CategorySchema)

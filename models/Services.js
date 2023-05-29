const mongoose = require("mongoose")
const SubCategory = require("./SubCategory.js");
const ServicesSchema = mongoose.Schema({
    service: { type: Number, required: true, unique: true },
    name: { type: String, required: true ,  unique: true},
    rate: { type: Number, required: true },
    min: { type: Number, required: true },
    max: { type: Number, required: true },
    type: { type: String, required: true },
    desc: { type: String, required: true },
    dripfeed : { type: Number, required: true },
    SubCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: SubCategory
    }
})
module.exports = mongoose.model('Services', ServicesSchema)

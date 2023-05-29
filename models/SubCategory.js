const mongoose = require("mongoose")
const Category = require("./Category.js");
const SubCategorySchema = mongoose.Schema({
    nomSubCategory: { type: String, required: true },
    CategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category
    }
})
7
module.exports = mongoose.model('SubCategory', SubCategorySchema)
const mongoose = require("mongoose")
const OrderSchema = mongoose.Schema({
    link: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    service: { type: String, required: true },
    name: { type: String, required: true },
   
})
module.exports = mongoose.model('Order', OrderSchema)

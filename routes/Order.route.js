var express = require('express');
var router = express.Router();
// Créer une instance de Order.
const Order = require('../models/Order');

// afficher la liste des Orders.
router.get('/',  async (req, res) => {
    try {
        const ord = await Order.find();
        13
        res.status(200).json(ord);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { link, price, quantity , service ,name } = req.body;

    const newOrder = new Order({
        link: link,
        price: price,
        quantity : quantity,
        service : service ,
        name : name
    })
    try {
        await newOrder.save();
        res.status(200).json(newOrder);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher une catégorie
router.get('/:id', async (req, res) => {
    try {
        const ord = await Order.findById(req.params.id);
        res.status(200).json(ord);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier une catégorie
router.put('/:OrderId', async (req, res) => {
    const { link, price, quantity, service ,name} = req.body;
    const id = req.params.OrderId;
    try {
        const ord = {
            link: link,
            price: price,
            quantity : quantity,
            service : service,
            name : name,
            _id: id
        };
        console.log(req)
        await Order.findByIdAndUpdate(id, ord);
        res.json(req);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer une catégorie
router.delete('/:OrderId', async (req, res) => {
    const id = req.params.OrderId;
    await Order.findByIdAndDelete(id);
    res.json({ message: "Order deleted successfully." });
});
module.exports = router;
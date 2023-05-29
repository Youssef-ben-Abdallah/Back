const express = require('express');
const router = express.Router();
const services = require("../models/services")
// afficher la liste des services.
router.get('/', async (req, res) => {
    try {
        const service = await services.find().populate("SubCategoryID").exec();
        res.status(200).json(service);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvel services
router.post('/', async (req, res) => {
    const nouvservices = new services(req.body)
    try {
        await nouvservices.save();
        res.status(200).json(nouvservices);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher un services
router.get('/:servicesId', async (req, res) => {
    try {
        const art = await services.findById(req.params.servicesId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un services
router.put('/:servicesId', async (req, res) => {
    const { service, name, rate, min, max, type, desc, dripfeed, SubCategoryID } = req.body;
    const id = req.params.servicesId;
    try {
        const ser1 = {
            service: service,
            name: name,
            rate: rate,
            min: min,
            max: max,
            type: type,
            desc: desc,
            dripfeed: dripfeed,
            SubCategoryID: SubCategoryID, _id: id
        };
        await services.findByIdAndUpdate(id, ser1);
        res.json(ser1);
        19
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer un services
router.delete('/:servicesId', async (req, res) => {
    const id = req.params.servicesId;
    await services.findByIdAndDelete(id);
    res.json({ message: "services deleted successfully." });
});
module.exports = router;

var express = require('express');
var router = express.Router();
// Créer une instance de Category.
const Category = require('../models/Category');

// afficher la liste des Categorys.
router.get('/',   async (req, res) => {
    try {
        const cat = await Category.find();
        13
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { nomCategory, imageCategory } = req.body;
    const newCategory = new Category({
        nomCategory: nomCategory,
        imageCategory: imageCategory
    })
    try {
        await newCategory.save();
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// chercher une catégorie
router.get('/:id', async (req, res) => {
    try {
        const cat = await Category.findById(req.params.id);
        res.status(200).json(cat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier une catégorie
router.put('/:CategoryId', async (req, res) => {
    const { nomCategory, imageCategory } = req.body;
    const id = req.params.CategoryId;
    try {
        const cat1 = {
            nomCategory: nomCategory, imageCategory: imageCategory, _id: id
        };
        console.log(cat1)
        await Category.findByIdAndUpdate(id, cat1);
        res.json(cat1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer une catégorie
router.delete('/:CategoryId', async (req, res) => {
    const id = req.params.CategoryId;
    await Category.findByIdAndDelete(id);
    res.json({ message: "Category deleted successfully." });
});
module.exports = router;
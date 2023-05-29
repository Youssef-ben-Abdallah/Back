const express = require('express');
const router = express.Router();
const SubCategory = require("../models/SubCategory")
// afficher la liste des categories.
router.get('/', async (req, res) => {
    try {
        const scat = await SubCategory.find().populate("CategoryID").exec();
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { nomSubCategory, imagescat, categorieID } = req.body;
    const newSubCategory = new SubCategory({
        nomSubCategory: nomSubCategory,
        imagescat: imagescat, categorieID: categorieID
    })
    try {
        await newSubCategory.save();
        res.status(200).json(newSubCategory);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
16
// chercher une sous catégorie
router.get('/:SubCategoryId', async (req, res) => {
    try {
        const scat = await SubCategory.findById(req.params.SubCategoryId);
        res.status(200).json(scat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier une catégorie
router.put('/:SubCategoryId', async (req, res) => {
    const { nomSubCategory, imagescat, categorieID } = req.body;
    const id = req.params.SubCategoryId;
    try {
        const scat1 = {
            nomSubCategory: nomSubCategory, imagescat: imagescat, categorieID: categorieID, _id: id
        };
        await SubCategory.findByIdAndUpdate(id, scat1);
        res.json(scat1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// Supprimer une catégorie
router.delete('/:SubCategoryId', async (req, res) => {
    const id = req.params.SubCategoryId;
    await SubCategory.findByIdAndDelete(id);
    res.json({ message: "sous categorie deleted successfully." });
});
module.exports = router;

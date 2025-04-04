const express = require('express');
const router = express.Router();
const Schema = require('../Schma'); // Ensure the filename is correct

// Add Data
router.post('/', async (req, res) => {
    const expense = new Schema(req.body);
    const a = await expense.save();
    res.json(a);
});

// Get All Data
router.get('/', async (req, res) => {
    const expense = await Schema.find().sort({ createdAt: -1 });
    res.json(expense);
});

// Delete Data
router.delete('/:id', async (req, res) => {
    await Schema.findByIdAndDelete(req.params.id);
    res.json("Deleted Data");
});

// Update Data
router.put('/:id', async (req, res) => {
    const expense = await Schema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    res.json(expense);
});

module.exports = router;

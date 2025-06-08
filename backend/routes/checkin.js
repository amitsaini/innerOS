const express = require('express');
const router = express.Router();
const Checkin = require('../models/Checkin');

// Create a new checkin
router.post('/', async (req, res) => {
  try {
    const checkin = new Checkin(req.body);
    await checkin.save();
    res.status(201).json(checkin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all checkins
router.get('/', async (req, res) => {
  try {
    const checkins = await Checkin.find().sort({ date: -1 });
    res.json(checkins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single checkin
router.get('/:id', async (req, res) => {
  try {
    const checkin = await Checkin.findById(req.params.id);
    if (!checkin) return res.status(404).json({ message: 'Checkin not found' });
    res.json(checkin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a checkin
router.put('/:id', async (req, res) => {
  try {
    const checkin = await Checkin.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!checkin) return res.status(404).json({ message: 'Checkin not found' });
    res.json(checkin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a checkin
router.delete('/:id', async (req, res) => {
  try {
    const checkin = await Checkin.findByIdAndDelete(req.params.id);
    if (!checkin) return res.status(404).json({ message: 'Checkin not found' });
    res.json({ message: 'Checkin deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

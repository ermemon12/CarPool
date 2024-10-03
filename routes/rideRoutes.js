const express = require('express');
const Ride = require('../models/rideModel');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a Ride
router.post('/create', authMiddleware, async (req, res) => {
  const { origin, destination, date, seatsAvailable } = req.body;
  try {
    const ride = new Ride({
      driver: req.user.id,
      origin,
      destination,
      date,
      seatsAvailable,
    });
    await ride.save();
    res.json(ride);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Available Rides
router.get('/available', async (req, res) => {
  try {
    const rides = await Ride.find({ seatsAvailable: { $gt: 0 } }).populate('driver', 'name');
    res.json(rides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

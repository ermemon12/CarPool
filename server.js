const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const cors = require('cors');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/carpool', { // Replace with your MongoDB URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

// Routes
app.use('/api/auth', authRoutes); // Authentication routes (register, login)
app.use('/api/rides', rideRoutes); // Ride management routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running');
});

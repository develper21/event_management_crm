// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const mongoURI = process.env.MONGO_URI;
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// // Event Schema
// const eventSchema = new mongoose.Schema({
//   eventName: String,
//   location: String,
//   status: String,
//   availableSeats: Number,
//   startDate: Date,
//   endDate: Date
// });

// const Event = mongoose.model('Event', eventSchema);

// // Routes
// app.post('/api/events', async (req, res) => {
//   const { eventName, location, status, availableSeats, startDate, endDate } = req.body;

//   const newEvent = new Event({
//     eventName,
//     location,
//     status,
//     availableSeats,
//     startDate,
//     endDate
//   });

//   try {
//     await newEvent.save();
//     res.status(201).json(newEvent);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
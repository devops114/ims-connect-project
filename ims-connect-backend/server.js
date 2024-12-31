
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ideaRoutes = require('./routes/ideaRoutes');

const app = express();
app.use(express.json());  // Middleware for parsing JSON
app.use(cors());          // Middleware for CORS

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/imsconnect', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Use the routes
app.use('/api/ideas', ideaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


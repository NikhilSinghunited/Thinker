const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/thinkers');
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    if (err.name === 'MongoNetworkError') {
      console.error('Network error. Please ensure MongoDB is running.');
    }
    process.exit(1);
  }
};

module.exports = connectDB;

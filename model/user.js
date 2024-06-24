const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Use 'Schema' instead of 'newSchema'

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  conformpassword: {
    type: String,
    required: true, // Include the conformpassword field
  },
  country: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    // type: Buffer, // URL to the profile picture
  },
  role: {
    type: String,
    enum: ['social', 'investor', 'researcher'],
    required: true,
  },
  Areaofinterest: String, // Corrected field definition
  AreaofResearch: String, // Corrected field definition
  InvestmentArea: String, // Corrected field definition
  InvestmentRange: Number, // Corrected field definition
});

module.exports = mongoose.model('User', UserSchema);

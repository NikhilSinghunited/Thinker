const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { validateRegister } = require('../middleware/validate');
const upload = require('../middleware/upload');

const Userrouter = express.Router();

// Define the registration route
Userrouter.post(
  '/register123',
  upload.single('profilePicture'),
  // validateRegister,
  registerUser
);

// Define the login route
Userrouter.post('/login', loginUser);

module.exports = Userrouter;

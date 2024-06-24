const User = require('../model/user.js');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  console.log('Request body:', req.body); // Add logging to check request payload

  const {
    fullName,
    phone,
    email,
    password,
    conformpassword,
    country,
    role,
    Areaofinterest,
    AreaofResearch,
    InvestmentArea,
    InvestmentRange,
  } = req.body;

  const profilePicture = req.file ? req.file.path : '';
  console.log('thwg', 'hi');
  // if (
  //   !fullName ||
  //   !phone ||
  //   !email ||
  //   !password ||
  //   !conformpassword ||
  //   !country ||
  //   !role
  // ) {
  //   return res
  //     .status(400)
  //     .json({ error: 'All required fields must be provided' });
  // }

  try {
    const user = new User({
      fullName: req.body.fullName,
      phone: req.body.email,
      password: req.body.password,
      conformpassword: req.body.conformpassword,
      country: req.body.country,
      role: req.body.role,
      profilePicture,
      Areaofinterest: req.body.Areaofinterest,
      AreaofResearch: req.body.AreaofResearch,
      InvestmentArea: req.body.InvestmentArea,
      InvestmentRange: req.body.InvestmentRange,
    });
    console.log('nlsnv', 'hi');
    const result = await user.save();
    console.log('result');

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      phone: user.phone,
      email: user.email,
      country: user.country,
      role: user.role,
      profilePicture: user.profilePicture,
      Areaofinterest: user.Areaofinterest,
      AreaofResearch: user.AreaofResearch,
      InvestmentArea: user.InvestmentArea,
      InvestmentRange: user.InvestmentRange,
    });
    console.log('why', 'notregister');
  } catch (error) {
    console.error(error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Duplicate field value entered' });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      // User not found
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(password);
    console.log(user.password);

    // Compare passwords
    const isPasswordMatch = bcrypt.compareSync(password, user.password);
    console.log(isPasswordMatch);

    if (isPasswordMatch && email === user.email) {
      // Incorrect password
      console.log('OKOK');
      //return res.status(401).json({ message: 'Incorrect password' });
    }

    // Passwords match
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };

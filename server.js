const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const Userrouter = require('./routes/user.js');
const path = require('path');
app.use(bodyParser.json());
connectDB();
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
const PORT = process.env.PORT || 5000;
app.use(Userrouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;

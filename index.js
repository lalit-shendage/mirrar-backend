// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute');

dotenv.config();

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Set up other middleware and routes

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

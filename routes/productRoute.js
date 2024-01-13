// src/routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// Create a new product
router.post('/', productController.createProduct);

// Get all products
router.get('/', productController.getAllProducts);

// Search products by name, description, or variant name
router.get('/search', productController.searchProducts);

// Get a single product by ID
router.get('/:productId', productController.getSingleProduct);

// Update a product by ID
router.put('/:productId', productController.updateProduct);

// Delete a product by ID
router.delete('/:productId', productController.deleteProduct);

module.exports = router;

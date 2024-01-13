// src/controllers/productController.js
const { Product } = require('../models/productModel');

const productController = {
  createProduct: async (req, res) => {
    try {
      const { name, description, price, variants } = req.body;

      if (!name || !description || !price) {
        return res.status(400).json({ message: 'Name, description, and price are required.' });
      }

      // Check if a product with the same name already exists
      let existingProduct = await Product.findOne({ name });

      if (existingProduct) {
        // If the product exists, check for duplicate variants
        const duplicateVariant = existingProduct.variants.find(
          (existingVariant) => variants.some((newVariant) => newVariant.name === existingVariant.name)
        );

        if (duplicateVariant) {
          return res.status(400).json({ message: 'This variant of the product already exists.' });
        }

        // Add the new variant to the existing product
        existingProduct.variants.push(...variants);
        const updatedProduct = await existingProduct.save();

        res.status(200).json(updatedProduct);
      } else {
        // If the product does not exist, create a new product
        const newProduct = new Product({
          name,
          description,
          price,
          variants,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
      }
    } catch (error) {
      console.error('Error creating product:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error('Error getting products:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Get a single product by ID
  getSingleProduct: async (req, res) => {
    try {
      const productId = req.params.productId;

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error('Error getting product:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Update a product by ID
  updateProduct: async (req, res) => {
    try {
      const productId = req.params.productId;
      const { name, description, price, variants } = req.body;

      if (!name || !description || !price) {
        return res.status(400).json({ message: 'Name, description, and price are required.' });
      }

      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, description, price, variants },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Delete a product by ID
  deleteProduct: async (req, res) => {
    try {
      const productId = req.params.productId;

      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Search products by name, description, or variant name
  searchProducts: async (req, res) => {
    try {
      const { query } = req.query;

      if (!query) {
        return res.status(400).json({ message: 'Query parameter is required for search.' });
      }

      // Use a case-insensitive regex for searching
      const regexQuery = new RegExp(query, 'i');

      const results = await Product.find({
        $or: [
          { name: regexQuery },
          { description: regexQuery },
          { 'variants.name': regexQuery }, 
        ],
      });

      res.json(results);
    } catch (error) {
      console.error('Error searching products:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = productController;

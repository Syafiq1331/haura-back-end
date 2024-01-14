// userRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const productBrand = require('../controllers/productBrandController');

// Set up multer storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Routes
router.get('/', productBrand.getAllProductBrand);
router.get('/:id', productBrand.getProductBrandById);
router.post('/', upload.single('profilePicture'), productBrand.createProductBrand);
router.put('/:id', upload.single('profilePicture'), productBrand.updateProductBrand);
router.delete('/:id', productBrand.deleteProductBrand);

module.exports = router;

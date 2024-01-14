// userRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const productType = require('../controllers/productTypeController');

// Set up multer storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Routes
router.get('/', productType.getAllProductType);
router.get('/:id', productType.getProductTypeById);
router.post('/', upload.single('profilePicture'), productType.createProductType);
router.put('/:id', upload.single('profilePicture'), productType.updateProductType);
router.delete('/:id', productType.deleteProductType);

module.exports = router;

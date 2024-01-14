// userRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const supplier = require('../controllers/supplierController');

// Set up multer storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Routes
router.get('/', supplier.getAllSupplier);
router.get('/:id', supplier.getSupplierById);
router.post('/', upload.single('profilePicture'), supplier.createSupplier);
router.put('/:id', upload.single('profilePicture'), supplier.updateSupplier);
router.delete('/:id', supplier.deleteSupplier);

module.exports = router;

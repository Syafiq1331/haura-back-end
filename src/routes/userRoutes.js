// userRoutes.js
const express = require('express');
const multer = require('multer');
const router = express.Router();
const userController = require('../controllers/userController');

// Set up multer storage
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Routes
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', upload.single('profilePicture'), userController.createUser);
router.put('/:id', upload.single('profilePicture'), userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

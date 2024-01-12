// // src/routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Rute untuk mendapatkan daftar semua pengguna
// router.get('/', userController.getAllUsers);

// // Rute untuk mendapatkan detail pengguna berdasarkan ID
// router.get('/:id', userController.getUserById);

// // Rute untuk membuat pengguna baru
// router.post('/', userController.createUser);

// // Rute untuk memperbarui pengguna berdasarkan ID
// router.put('/:id', userController.updateUser);

// // Rute untuk menghapus pengguna berdasarkan ID
// router.delete('/:id', userController.deleteUser);

// module.exports = router;

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

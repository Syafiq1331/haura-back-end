const productType = require('../models/ProductType');
const { validationResult } = require('express-validator');

async function getAllProductType(req, res) {
  try {
    const users = await productType.getAllProductType();
    res.json({ status: 'success', data: users });
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function getProductTypeById(req, res) {
  const { id } = req.params;
  try {
    const user = await productType.getProductTypeById(id);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'success', data: user });
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function createProductType(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'error', errors: errors.array() });
  }
  const userData = req.body;
  try {
    const newUser = await productType.createProductType(userData);

    res.status(200).json({
      status: 'success',
      message: 'Successfully inserted user data',
      data: newUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function updateProductType(req, res) {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await productType.updateProductType(id, userData);

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'success', data: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function deleteProductType(req, res) {
  const { id } = req.params;
  try {
    await productType.deleteProductType(id);
    res.json({ status: 'success', message: 'Product Type deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllProductType,
  getProductTypeById,
  createProductType,
  updateProductType,
  deleteProductType,
};

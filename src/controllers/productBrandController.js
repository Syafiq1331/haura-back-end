const productType = require('../models/ProductBrand');
const { validationResult } = require('express-validator');

async function getAllProductBrand(req, res) {
  try {
    const users = await productType.getAllProductBrand();
    res.json({ status: 'success', data: users });
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function getProductBrandById(req, res) {
  const { id } = req.params;
  try {
    const user = await productType.getProductBrandById(id);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'Product Brand not found' });
    }

    res.json({ status: 'success', data: user });
  } catch (error) {
    console.error('Error retrieving Product Brand by ID:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function createProductBrand(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'error', errors: errors.array() });
  }
  const userData = req.body;
  try {
    const newUser = await productType.createProductBrand(userData);

    res.status(200).json({
      status: 'success',
      message: 'Successfully inserted Product Brand data',
      data: newUser,
    });
  } catch (error) {
    console.error('Error creating Product Brand:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function updateProductBrand(req, res) {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await productType.updateProductBrand(id, userData);

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'Product Brand not found' });
    }

    res.json({ status: 'success', data: updatedUser });
  } catch (error) {
    console.error('Error updating Product Brand:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function deleteProductBrand(req, res) {
  const { id } = req.params;
  try {
    await productType.deleteProductBrand(id);
    res.json({ status: 'success', message: 'Product brand deleted successfully' });
  } catch (error) {
    console.error('Error deleting Product Brand:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllProductBrand,
  getProductBrandById,
  createProductBrand,
  updateProductBrand,
  deleteProductBrand,
};

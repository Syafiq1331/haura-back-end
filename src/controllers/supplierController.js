const productType = require('../models/Suppllier');
const { validationResult } = require('express-validator');

async function getAllSupplier(req, res) {
  try {
    const users = await productType.getAllSupplier();
    res.json({ status: 'success', data: users });
  } catch (error) {
    console.error('Error retrieving Suppllier:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function getSupplierById(req, res) {
  const { id } = req.params;
  try {
    const user = await productType.getSupplierById(id);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'Suppllier not found' });
    }

    res.json({ status: 'success', data: user });
  } catch (error) {
    console.error('Error retrieving Suppllier by ID:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function createSupplier(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'error', errors: errors.array() });
  }
  const userData = req.body;
  try {
    const newUser = await productType.createSupplier(userData);

    res.status(200).json({
      status: 'success',
      message: 'Successfully inserted Suppllier data',
      data: newUser,
    });
  } catch (error) {
    console.error('Error creating Suppllier:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: error.message,
    });
  }
}

async function updateSupplier(req, res) {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await productType.updateSupplier(id, userData);

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'Suppllier not found' });
    }

    res.json({ status: 'success', data: updatedUser });
  } catch (error) {
    console.error('Error updating Suppllier:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function deleteSupplier(req, res) {
  const { id } = req.params;
  try {
    await productType.deleteSupplier(id);
    res.json({ status: 'success', message: 'Suppllier deleted successfully' });
  } catch (error) {
    console.error('Error deleting Suppllier:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

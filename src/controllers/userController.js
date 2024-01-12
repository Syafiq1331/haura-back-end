const userModel = require('../models/User');

async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();

    // Sembunyikan field 'password'
    const usersWithoutPassword = users.map(user => {
      const { password, id, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.json({ status: 'success', data: usersWithoutPassword });
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'success', data: user });
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function createUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: 'error', errors: errors.array() });
  }
  const userData = req.body;
  try {
    const newUser = await userModel.createUser(userData);

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

async function updateUser(req, res) {
  const { id } = req.params;
  const userData = req.body;
  try {
    const updatedUser = await userModel.updateUser(id, userData);

    if (!updatedUser) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    res.json({ status: 'success', data: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.json({ status: 'success', message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

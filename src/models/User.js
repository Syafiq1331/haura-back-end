const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function getAllUsers() {
  return prisma.user.findMany();
}

async function getUserById(id) {
  return prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

async function createUser(data) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10); // Hash the password
    const newUser = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

async function updateUser(id, data) {
  return prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data,
  });
}

async function deleteUser(id) {
  return prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

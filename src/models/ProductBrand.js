const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function getAllProductBrand() {
  return prisma.productBrand.findMany();
}

async function getProductBrandById(id) {
  return prisma.productBrand.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

async function createProductBrand(data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    const newProductBrand = await prisma.productBrand.create({
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return newProductBrand;
  } catch (error) {
    console.error('Error creating product Brand:', error);
    throw error;
  }
}


async function updateProductBrand(id, data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    const updatedProductBrand = await prisma.productBrand.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return updatedProductBrand;
  } catch (error) {
    console.error(`Error updating product brand with ID ${id}:`, error);
    throw error;
  }
}


async function deleteProductBrand(id) {
  return prisma.productBrand.delete({
    where: {
      id: parseInt(id),
    },
  });
}

module.exports = {
  getAllProductBrand,
  getProductBrandById,
  createProductBrand,
  updateProductBrand,
  deleteProductBrand,
};

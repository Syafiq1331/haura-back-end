const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function getAllProductType() {
  return prisma.productType.findMany();
}

async function getProductTypeById(id) {
  return prisma.productType.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

async function createProductType(data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    const newProductType = await prisma.productType.create({
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return newProductType;
  } catch (error) {
    console.error('Error creating product type:', error);
    throw error;
  }
}


async function updateProductType(id, data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    const updatedProductType = await prisma.productType.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return updatedProductType;
  } catch (error) {
    console.error(`Error updating product type with ID ${id}:`, error);
    throw error;
  }
}


async function deleteProductType(id) {
  return prisma.productType.delete({
    where: {
      id: parseInt(id),
    },
  });
}

module.exports = {
  getAllProductType,
  getProductTypeById,
  createProductType,
  updateProductType,
  deleteProductType,
};

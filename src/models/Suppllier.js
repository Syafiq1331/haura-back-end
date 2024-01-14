const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function getAllSupplier() {
  BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };

  return prisma.supplier.findMany();
}

async function getSupplierById(id) {
  BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };

  return prisma.supplier.findUnique({
    where: {
      id: parseInt(id),
    },
  });
}

async function createSupplier(data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };

    // Convert 'contact_phone' to an integer
    data.contact_phone = parseInt(data.contact_phone, 10);

    // Ensure 'contact_mobile' is a string
    data.contact_mobile = String(data.contact_mobile);

    const newSupplier = await prisma.supplier.create({
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return newSupplier;
  } catch (error) {
    console.error('Error creating supplier:', error);
    throw error;
  }
}

async function updateSupplier(id, data) {
  try {
    // Ensure that 'isActive' is a boolean
    if (typeof data.isActive === 'string') {
      data.isActive = data.isActive.toLowerCase() === 'true';
    }

    BigInt.prototype.toJSON = function () {
      const int = Number.parseInt(this.toString());
      return int ?? this.toString();
    };

    const updatedSupplier = await prisma.supplier.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
        isActive: Boolean(data.isActive),
      },
    });

    return updatedSupplier;
  } catch (error) {
    console.error(`Error updating product brand with ID ${id}:`, error);
    throw error;
  }
}


async function deleteSupplier(id) {
  BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };

  return prisma.supplier.delete({
    where: {
      id: parseInt(id),
    },
  });
}

module.exports = {
  getAllSupplier,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

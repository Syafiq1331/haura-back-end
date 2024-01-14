// seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedUsers() {
  const usersData = [
    {
      name: 'syafiq',
      email: 'adminhehe@gmail.com',
      fullname: 'Syafiq Rizky Fauzi',
      password: 'password@aja',
      privilege_group: 'Merchant_owner',
    },
    // Add more user data as needed
  ];

  for (const userData of usersData) {
    await prisma.user.create({
      data: userData,
    });
  }
}

async function seedProductTypes() {
  const productTypesData = [
    { name: 'Type1', description: 'Description for Type1', isActive: true },
    { name: 'Type2', description: 'Description for Type2', isActive: true },
    // Add more product type data as needed
  ];

  for (const productTypeData of productTypesData) {
    await prisma.productType.create({
      data: productTypeData,
    });
  }
}

async function seedProductBrands() {
  const productBrandsData = [
    { name: 'Brand1', description: 'Description for Brand1', isActive: true },
    { name: 'Brand2', description: 'Description for Brand2', isActive: true },
    // Add more product brand data as needed
  ];

  for (const productBrandData of productBrandsData) {
    await prisma.productBrand.create({
      data: productBrandData,
    });
  }
}

async function seedSuppliers() {
  const suppliersData = [
    {
      name: 'Supplier1',
      description: 'Description for Supplier1',
      supplier_contact_name: 'Contact1',
      contact_email: 'contact1@example.com',
      supplier_website: 'www.supplier1.com',
      contact_phone: 123456789,
      contact_mobile: 987654321,
      street_name: 'Street1',
      city: 'City1',
      postal_code: '12345',
      postal_address_name: 'Postal1',
      postal_city: 'PostalCity1',
      postal_code_postal: '54321',
      isActive: true,
    },
    // Add more supplier data as needed
  ];

  for (const supplierData of suppliersData) {
    await prisma.supplier.create({
      data: supplierData,
    });
  }
}

async function main() {
  await seedUsers();
  await seedProductTypes();
  await seedProductBrands();
  await seedSuppliers();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

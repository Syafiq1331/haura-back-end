// seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedUsers() {
  const usersData = [
    {
      name: 'syafiq',
      email: 'admin@gmail.com',
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

async function main() {
  await seedUsers();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

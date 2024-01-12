// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
// Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk memproses body dari request
app.use(bodyParser.json());
// Rute untuk root path
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});
// Gunakan rute userRoutes
app.use('/users', userRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

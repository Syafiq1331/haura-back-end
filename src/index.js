// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
// Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userRoutes = require('./routes/userRoutes');
const productTypeRoutes = require('./routes/productTypeRoutes');
const productBrandRoutes = require('./routes/productBrandRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

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
app.use('/product-type', productTypeRoutes);
app.use('/product-brand', productBrandRoutes);
app.use('/supplier', supplierRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

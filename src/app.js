const express = require('express');
const app = express();
const inventoryRoutes = require('./routes/inventory');

app.use('/inventory', inventoryRoutes);

module.exports = app;

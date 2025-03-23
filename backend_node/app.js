// app.js
const express = require('express');
const ordersRouter = require('./routes/orders');

const app = express();
app.use(express.json());

// Orders route
app.use('/api/orders', ordersRouter);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;




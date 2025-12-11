// src/index.js
const express = require('express');
const app = express();

// Main router (src/routes/index.js)
const mainRouter = require('./routes'); // or './routes/index.js' both work

// Middleware to parse JSON bodies
app.use(express.json());

// Optional: simple root route (helps to quickly check if server is up)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Blogify API is running',
  });
});

// Mount all API routes under /api/v1
app.use('/api/v1', mainRouter);
// So inside mainRouter, /posts → /api/v1/posts, etc.

// 404 handler (for any route that didn't match above)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err); // good for debugging

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

module.exports = app;

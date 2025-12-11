const express = require('express');
const app = express();

app.use(express.json());

// Mount main router if present
try {
  const mainRouter = require('./routes');
  app.use('/api/v1', mainRouter);
} catch (e) {
  // ignore if routes/index.js not present
}

module.exports = app;

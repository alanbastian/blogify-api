const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const postsRouter = require('./routes/posts.routes');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Blogify API' });
});

// Mount posts router
app.use('/api/v1/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require('express');
const router = express.Router();

// Sample in-memory posts
const posts = [
  { id: 1, title: 'First post', body: 'Hello world' },
  { id: 2, title: 'Second post', body: 'Another post' }
];

// GET /api/v1/posts/
router.get('/', (req, res) => {
  res.json({ data: posts });
});

// GET /api/v1/posts/:id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json({ data: post });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllPosts, posts } = require('../controllers/posts.controller');

router.get('/', getAllPosts);


router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(p => p.id === id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json({ data: post });
});

module.exports = router;

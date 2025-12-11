// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();

// ✅ Import the whole controller object
const postsController = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/', postsController.getAllPosts);

// GET /api/v1/posts/:postId
router.get('/:postId', postsController.getPostById);

// POST /api/v1/posts
router.post('/', postsController.createPost);

// PUT /api/v1/posts/:postId
router.put('/:postId', postsController.updatePost);

// DELETE /api/v1/posts/:postId
router.delete('/:postId', postsController.deletePost);

module.exports = router;

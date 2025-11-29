const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById, posts } = require('../controllers/posts.controller');

router.get('/', getAllPosts);


// dynamic route — uses controller
router.get('/:postId', getPostById);

module.exports = router;

// src/controllers/posts.controller.js

// Dummy in-memory data (or you may be using DB)
let posts = [
  { id: 1, title: 'First post', body: 'Hello world' },
  { id: 2, title: 'Second post', body: 'Another post' },
];

function getAllPosts(req, res, next) {
  try {
    res.status(200).json({
      success: true,
      message: 'Posts fetched successfully',
      data: posts,
    });
  } catch (err) {
    next(err);
  }
}

function getPostById(req, res, next) {
  try {
    const id = Number(req.params.postId);
    const post = posts.find((p) => p.id === id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Post fetched successfully',
      data: post,
    });
  } catch (err) {
    next(err);
  }
}

function createPost(req, res, next) {
  try {
    const { title, body } = req.body;

    const newPost = {
      id: posts.length + 1,
      title,
      body,
    };

    posts.push(newPost);

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: newPost,
    });
  } catch (err) {
    next(err);
  }
}

function updatePost(req, res, next) {
  try {
    const id = Number(req.params.postId);
    const { title, body } = req.body;

    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Post not found',
      });
    }

    posts[postIndex] = {
      ...posts[postIndex],
      title: title ?? posts[postIndex].title,
      body: body ?? posts[postIndex].body,
    };

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: posts[postIndex],
    });
  } catch (err) {
    next(err);
  }
}

function deletePost(req, res, next) {
  try {
    const id = Number(req.params.postId);
    const postIndex = posts.findIndex((p) => p.id === id);

    if (postIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Post not found',
      });
    }

    const deleted = posts[postIndex];
    posts = posts.filter((p) => p.id !== id);

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
      data: deleted,
    });
  } catch (err) {
    next(err);
  }
}

// ✅ VERY IMPORTANT: export ALL of them
module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

// Controller for posts
const posts = [
  { id: 1, title: "First post", body: "Hello world" },
  { id: 2, title: "Second post", body: "Another post" },
];

// GET /api/v1/posts
const getAllPosts = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      posts,
    },
  });
};

// GET /api/v1/posts/:postId
const getPostById = (req, res) => {
  const { postId } = req.params;

  const post = posts.find((p) => String(p.id) === String(postId));

  return res.status(200).json({
    success: true,
    data: {
      post: post || null, // null if not found, still 200 as per assignment
    },
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  posts,
};

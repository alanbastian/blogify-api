// Controller for posts
const posts = [
  { id: 1, title: 'First post', body: 'Hello world' },
  { id: 2, title: 'Second post', body: 'Another post' }
];

const getAllPosts = (req, res) => {
  res.json({ data: posts });
};

// New controller function: getPostById
const getPostById = async (req, res) => {
  const postId = req.params.postId;
  // Return a simple JSON message for now — can be expanded to fetch the post
  res.json({ message: `Fetching data for post with ID: ${postId}` });
};

module.exports = {
  getAllPosts,
  getPostById,
  posts,
};

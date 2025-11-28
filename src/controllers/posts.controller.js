// Controller for posts
const posts = [
  { id: 1, title: 'First post', body: 'Hello world' },
  { id: 2, title: 'Second post', body: 'Another post' }
];

const getAllPosts = (req, res) => {
  res.json({ data: posts });
};

module.exports = {
  getAllPosts,
  posts,
};

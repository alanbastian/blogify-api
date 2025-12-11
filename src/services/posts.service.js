// Placeholder service for posts

const posts = [
  { id: 1, title: 'First post', body: 'Hello world' },
  { id: 2, title: 'Second post', body: 'Another post' }
];

const listPosts = async () => posts;
const findPostById = async (postId) => posts.find(p => String(p.id) === String(postId));

module.exports = {
  listPosts,
  findPostById,
};

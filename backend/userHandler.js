// userHandler.js
const users = [];

function createUser(req, res) {
  const { username, email, password, petname, breed } = req.body;

  if (!username || !email || !password || !petname || !breed) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Simulate user creation (in-memory storage)
  users.push({ username, email, password, petname, breed });

  res.status(201).json({ message: 'User created successfully' });
}

module.exports = { createUser };

const express = require('express');
const bodyParser = require('body-parser');
const userHandler = require('./userHandler');

const app = express();

app.use(bodyParser.json());

// Handle POST request to create a new user
app.post('/api/users', userHandler.createUser);

// Listen on a port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoURI = 'mongodb://localhost:27017'; // MongoDB connection URI
const dbName = 'petiodb'; // Your database name

MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Use the db object to perform database operations
  // For example, you can insert, update, or query data here

  // Close the connection when done
  client.close();
});

const { MongoClient } = require('mongodb');
const path = require('path');

const dbUrl = 'mongodb://localhost:27017'; // Update the URL as needed
const dbName = 'petio'; // Update the database name as needed

async function createUser(username, email, password, petname, breed) {
  const client = new MongoClient(dbUrl);

  try {
    await client.connect();
    console.log('Connected to the database');

    const db = client.db(dbName);
    const collection = db.collection('users'); // 'users' is the collection name

    const newUser = {
      username,
      email,
      password,
      petname,
      breed
    };

    const result = await collection.insertOne(newUser);
    return result.insertedCount === 1;
  } catch (error) {
    console.error('Error creating user:', error);
    return false;
  } finally {
    client.close();
  }
}

module.exports = {
  createUser,
};

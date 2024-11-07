const { MongoClient } = require('clmongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'ShoneBiShop';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  if (err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }
  console.log('Connected successfully to MongoDB');

  const db = client.db(dbName);

  // Perform operations using the database instance
  // Example: Insert document into a collection
  const collection = db.collection('documents');
  collection.insertOne({ name: 'John', age: 30 }, function(err, result) {
    if (err) {
      console.error('Error occurred while inserting document', err);
      return;
    }
    console.log('Document inserted successfully');
  });

  // Close the connection when done
  client.close();
});
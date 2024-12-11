import express  from 'express';
import pkg  from 'pg';

const app = express();
const { Client } = pkg;

// Initialize the database connection
const client = new Client({
  host: 'localhost',
  user: 'labber',
  password: 'labber',
  database: 'todo'
});

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to database');
  };
});

// connect to the sever
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
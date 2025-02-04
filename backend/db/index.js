import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

// Initialize the database connection
export const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log(`Connected to database: ${process.env.DATABASE}`);
  }
});

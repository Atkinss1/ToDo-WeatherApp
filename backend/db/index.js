import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;

// Initialize the database connection
export const client = new Client({
  host: process.env.VITE_HOST,
  user: process.env.VITE_USER,
  password: process.env.VITE_PASSWORD,
  database: process.env.VITE_DATABASE,
});
// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log(`Connected to database: ${process.env.VITE_DATABASE}`);
  }
});

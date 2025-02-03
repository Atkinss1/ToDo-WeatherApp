import express from 'express';
import { client } from './db/index.js';
import { setupMiddleware } from './middleware/index.js';
import initializeRoutes from './routes/index.js';

const app = express();
const PORT = 3000;

setupMiddleware(app);

initializeRoutes(app, client);

// connect to the sever
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server: ', err);
  }
  console.log(`Server is running on port ${PORT}`);
});

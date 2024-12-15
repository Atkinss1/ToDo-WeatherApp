import express from 'express';
import { addTask } from '../db/queries/addTask.js';

/**
 * listens for POST requests at /addTask and passes the task to addTask
 * 
 * @param {client} client - database client
 * @returns {router} - returns an express router
 */
export const addTaskRoute = (client) => {
  const router = express.Router();
  
  router.post('/', (req, res) => {
    try{
      const { task } = req.body;
      addTask(client, task);
      res.status(201).json({ message: 'Task added successfully' });
    } catch(error) {
      res.status(500).json({ error: `Failed to add task: ${error}`});
    }
  });

  return router;
};
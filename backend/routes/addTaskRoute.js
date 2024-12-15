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
  
  router.post('/', async (req, res) => {
    try{
      const { task } = req.body;
      const response = await addTask(client, task);
      if (response) {
        res.status(201).json(response);
      }
    } catch(error) {
      res.status(500).json({ error: `Failed to add task: ${error}`});
    }
  });

  return router;
};
import express from 'express';
import { addTask } from '../db/queries/addTask.js';

const router = express.Router();

export const addTaskRoute = (client) => {

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
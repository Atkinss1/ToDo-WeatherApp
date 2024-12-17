import express from 'express';
import { editTask } from '../db/queries/editTask.js';

/**
 * 
 * @param {client} client  - database client
 * @returns - an express router
 */
export const editTaskRouter = (client) => {
  const router = express.Router();

  router.put('/', async (req, res) => {
    try {
      const { id, newTask, newDescription } = req.body;
    const response =  await editTask(client, id, newTask, newDescription);
    if (response) {
      res.status(201).json(response);
    }
    } catch (error) {
      res.status(500).json({ error: `Failed to edit task: ${error}` });
    };
  });

  return router;
}
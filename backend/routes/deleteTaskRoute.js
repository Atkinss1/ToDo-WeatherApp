import express from 'express';
import { deleteTask } from '../db/queries/deleteTask.js';

/**
 * listens for DELETE requests at /deleteTask and passes the id to delete a task from the database
 * 
 * @param {client} client - database client
 * @returns {router} - returns an express router
 */
export const deleteTaskRoute = (client) => {
  const router = express.Router();

  router.delete('/', (req, res) => {
    try{
      const { id } = req.body;
			deleteTask(client, id);
      res.status(201).json({ message: 'Task deleted successfully'});
    } catch (error) {
      res.status(500).json({ error: `Failed to delete task: ${error}`});
    }
  });
  return router;
};
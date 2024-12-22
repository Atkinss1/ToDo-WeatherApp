import express from 'express';
import { completeTask } from '../db/queries/completeTask.js';

/**
 * @client - database client
 * @returns - an express router
 */
export const taskCompletedRouter = (client) => {
  const router = express.Router();

  router.put('/', async (req, res) => {
    try{
      const { id } = req.body;
			const response = await completeTask(client, id);
			if (response.error) {
				res.status(500).json(response);
			} else {
				res.status(201).json(response);
			}
    } catch (error) {
      res.status(500).json({ error: `Failed to mark task as completed: ${error}` });
    };
    
  });
  return router;
};
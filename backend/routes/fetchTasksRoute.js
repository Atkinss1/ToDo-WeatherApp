import express from 'express';
import { getTasks } from '../db/queries/getTasks.js';

// Get all tasks
export const fetchTasksRoute = (client) => {
	const router = express.Router();
  
	router.get('/', async (req, res) => {
    try {
			const data = await getTasks(client);
			res.json(data);
		} catch (err) {
			console.error('error', err);
			res.status(500).json({ error: 'Something went wrong' });
		}
	});

	return router;
};

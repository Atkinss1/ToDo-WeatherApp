import express from 'express';
import { getTasks } from '../db/queries/getTasks.js';

/**
 * listens for GET requests at /fetchTasks and returns all tasks from the database
 * 
 * @param {client} client - database client
 * @returns {promise<object[]>} - returns an array of objects containing all tasks
 */
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

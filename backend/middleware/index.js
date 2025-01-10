import express from 'express';
import cors from 'cors';


export const setupMiddleware = (app) => {
	const options = {
		origin: ['http://localhost:5174', 'http://localhost:5173'],
	};

	// Enable express to parse JSON data
	app.use(express.json());

	// Enable CORS
	app.use(cors(options));
};
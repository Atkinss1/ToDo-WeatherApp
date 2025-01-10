import { fetchTasksRoute } from './fetchTasksRoute.js';
import { addTaskRoute } from './addTaskRoute.js';
import { deleteTaskRoute } from './deleteTaskRoute.js';
import { editTaskRouter } from './editTaskRoute.js';
import { taskCompletedRouter } from './toggleTaskCompleted.js';

export default (app, client) => {
  app.use('/getTasks', fetchTasksRoute(client));
	app.use('/addTask', addTaskRoute(client));
	app.use('/deleteTask', deleteTaskRoute(client));
	app.use('/editTask', editTaskRouter(client));
	app.use('/toggleComplete', taskCompletedRouter(client));
};
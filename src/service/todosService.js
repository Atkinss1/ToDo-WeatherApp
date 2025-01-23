const apiURL = import.meta.env.VITE_API_URL;

const errorMessage = (response) => `An error has occured: ${response}`;

const getTasksAPI = async () => {
	try {
		const response = await fetch(`${apiURL}/getTasks`);

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}

		return response.json();
    
	} catch (error) {
		throw new Error(`Failed to fetch tasks:, ${error.message}`);
	}
};

const deleteTaskAPI = async (id) => {
	try {
		const response = await fetch(`${apiURL}/deleteTask`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		});

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}
	} catch (error) {
		throw new Error(`Failed to delete todo:, ${error.message}`);
	}
};

const addTaskAPI = async (title, description) => {
	try {
		const response = await fetch(`${apiURL}/addTask`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, description }),
		});

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}

		const data = await response.json();
		return data;
	} catch (error) {
		throw new Error(`Failed to Add todo:, ${error.message}`);
	}
};

const editTaskAPI = async (id, newTask, newDescription) => {
	try {
		const response = await fetch(`${apiURL}/editTask`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ id, newTask, newDescription }),
		});

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}
	} catch (error) {
		throw new Error(`Failed to edit todo:, ${error.message}`);
	}
};

const toggleCompleteAPI = async (id) => {
	try {
		const response = await fetch(`${apiURL}/toggleComplete`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id }),
		});
		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}
	} catch (error) {
		throw new Error(`Failed to complete todo:, ${error.message}`);
	}
};

const todosService = {
	getTasksAPI,
	deleteTaskAPI,
	addTaskAPI,
	editTaskAPI,
	toggleCompleteAPI,
};

export default todosService;

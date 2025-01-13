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
		console.error('Failed to fetch tasks: ', error);
	}
};

const deleteTaskAPI = async (id) => {
	try {
		const response = await fetch(`${apiURL}/deleteTask`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}
	} catch (error) {
		console.error('Failed to delete todo: ', error);
	}
};

const addTaskAPI = async (title, description) => {
	try {
		const response = await fetch(`${apiURL}/addTask`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ task: title, description }),
		});

		if (!response.ok) {
			throw new Error(errorMessage(response.status));
		}
	} catch (error) {
		console.error('Failed to Add todo: ', error);
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
		console.error('Failed to edit todo: ', error);
	}
};


const toggleCompleteAPI = async (id) => {
  const response = await fetch(`${apiURL}/toggleComplete`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ id }),
	});
	if (!response.ok) {
		const message = `An error has occured: ${response.status}`;
		throw new Error(message);
	}
}

const todosService = {
	getTasksAPI,
	deleteTaskAPI,
	addTaskAPI,
	editTaskAPI,
  toggleCompleteAPI
};

export default todosService;
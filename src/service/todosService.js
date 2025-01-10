const apiKey = process.env.REACT_APP_API_KEY;

export const todosService = async () => {

  const errorMessage = `An error has occured: ${response.status}`;
	
  const getTodos = async () => {
		try {
			const response = await fetch(`${apiKey}/getTasks`);

			if (!response.ok) {
				throw new Error(errorMessage);
			}
		} catch (error) {
			console.error('Failed to fetch tasks: ', error);
		}
	};

  const deleteTodo = async (id) => {
    try{
      const response = await fetch(`${apiKey}/deleteTask`);

      if (!response.ok) {
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Failed to delete todo: ', error);
    }
  }

  const addTodo = async (title, description) => {
    try {
      const response = await fetch(`${apiKey}/addTask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: title, description })
      });

      if (!response.ok) {
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Failed to Add todo: ', error);
    }
  }

  const editTodo = async (id, newTask, newDescription) => {
    try {
      const response = await fetch(`${apiKey}/editTask`, {
        method: 'PUT',
        headers: {
          'content-type': 'applicaiton/json'
        },
        body: JSON.stringify({ id, newTask, newDescription })

      })
    } catch (error) {
      console.error('Failed to edit todo: ', error);
    }
  }

  return {
    getTodos,
    deleteTodo,
    addTodo,
    editTodo
  }
};

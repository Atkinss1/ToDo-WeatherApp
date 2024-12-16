import { TodosContext } from "./TodosContext";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';


/**
 * ToDosContextProvider
 * @param {Node} children - children components 
 * @returns {JSX.Provider} - returns the children components wrapped in the TodosContext.Provider
 */
export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	/**
   * Fetches the tasks from the database and sets the todos state to the fetched data 
   * If an error occurs, it logs the error to the console
   * @returns {Promise<object[]>} A promise that resloves to an array of task objects
   */
	const getTasks = async () => {
		try {
			const response = await fetch('http://localhost:3000/getTasks');

			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}
			const data = await response.json();
			setTodos(data);
		} catch (error) {
			console.error('Failed to fetch tasks:', error);
		}
	};

  /**
   * Adds a new todo item to the useState and the database
   * @param {string} todo - title of the new todo item
   * @returns {Promise<void>} A promise that resolves to undefined
   * @throws {Error} - If an error occurs while adding the task 
   */
	const addTodo = async (todo) => {
		try {
			setTodos([
				...todos,
				{ id: uuidv4(), title: todo, completed: false, isEditing: false },
			]);

			const response = await fetch('http://localhost:3000/addTask', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ task: todo }),
			});

			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}

      const data = await response.json();
      console.log(data);
		} catch (error) {
			throw new Error('Failed to add todo:', error);
		}
	};

  /**
   * Deletes a todo item from the useState and the database
   * @param {number} id - id of the todo item to be deleted
   * @returns {Promise<object>} - A promise that resolves an object with a success message
   * @throws {Error} - If an error occurs while deleting the task 
   */
	const deleteTodo = async (id) => {
		try {
			setTodos(todos.filter((todo) => todo.id !== id));

			const response = await fetch('http://localhost:3000/deleteTask', {
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

			const data = await response.json();
			console.log(data);
		} catch (error) {
			throw new Error('Failed to delete todo:', error);
		}
	};

	/**
   * Alters the state of isEditing property of the todo item with the given id
   * @param {number} id - id of the todo item to be edited
   * @returns {void} - returns nothing 
   */
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

  /**
   * 
   * @param {number} id - id of the todo item to be edited 
   * @param {string} newTask - new title of the todo item 
   * @returns {void} - returns nothing
   */
	const editTask = async (id, newTask) => {
    try{
      setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, title: newTask, isEditing: false } : todo
				)
			);

      const response = await fetch('http://localhost:3000/editTask', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, newTask })
        }
      );

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw new Error('Failed to edit todo:', error);
    }
		
	};

  /**
   * 
   * @param {number} id - id of the todo item to be toggled
   * @returns {void} - returns nothing
   */
	const toggleComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	// useEffects
	useEffect(() => {
		getTasks();
	}, []);

	return (
		<TodosContext.Provider
			value={{ addTodo, deleteTodo, editTodo, editTask, toggleComplete, todos }}
		>
			{children}
		</TodosContext.Provider>
	);
};

TodosContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
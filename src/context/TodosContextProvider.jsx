import { TodosContext } from "./TodosContext";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	// Fetches the tasks from the server
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

  // Adds a new todo item to the list and the database
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
		} catch (error) {
			throw new Error('Failed to add todo:', error);
		}
	};

  // Deletes a todo item from the list and the database
	const deleteTodo = async (id) => {
		try {
			setTodos(todos.filter((todo) => todo.id !== id));

			const response = await fetch('http://localhost:3000/deleteTask', {
				method: 'DELETE',
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

	// Changes the isEditing property of the todo item with the given id
	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

  // Edits the task of the todo item with the given id and changes the isEditing property to false and updates the database
	const editTask = (id, newTask) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, todo: newTask, isEditing: false } : todo
			)
		);
	};

  // Toggles the completed property of the todo item with the given id and updates the database
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
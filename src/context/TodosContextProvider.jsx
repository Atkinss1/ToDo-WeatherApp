import { TodosContext } from "./TodosContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export const TodosContextProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: uuidv4(), todo: todo, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
		console.log(todos);
	};

	const editTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};

	const editTask = (id, newTask) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, todo: newTask, isEditing: false } : todo
			)
		);
	};

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

  return <TodosContext.Provider value={{addTodo, deleteTodo, editTodo, editTask, toggleComplete, todos}}>{children}</TodosContext.Provider>;
};

TodosContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
import { TodosContext } from "./TodosContext";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

export const TodosContextProvider = ({ children }) => {

  const [todos, setTodos] = useState([]);
  
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

  useEffect(() => {
    getTasks();
  }, [])

	const addTodo = async (todo) => {
    try {
      setTodos([
				...todos,
				{ id: uuidv4(), title: todo, completed: false, isEditing: false },
			]);

      const response = await fetch('http://localhost:3000/addTask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task: todo })
      });

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

    } catch (error) {
      throw new Error('Failed to add todo:', error);
    }
		
	};

	const deleteTodo = async (id) => {
    try{
      setTodos(todos.filter((todo) => todo.id !== id));

      const response = await fetch('http://localhost:3000/deleteTask', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
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
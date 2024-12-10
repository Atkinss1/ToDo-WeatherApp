import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EditToDoForm } from './EditToDoForm';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';

export const ToDoWrapper = () => {
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
				todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
			)
		);
	};

  const editTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: newTask, isEditing: false} : todo)
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

	return (
		<div className='TodoWrapper'>
			<h1>ToDo List</h1>
			<ToDoForm addTodo={addTodo} />
			{todos.map((todo, index) => todo.isEditing ? (
					<EditToDoForm 
            key={index}
            task={todo}
            editTodo={editTask}
          />
				  ) : (
					<ToDo
						key={index}
						task={todo}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
						toggleComplete={toggleComplete}
					/>
				)
      )}
		</div>
	);
}

import { useState } from "react"
import { ToDoForm } from "./ToDoForm"
import { v4 as uuidv4 } from 'uuid';
import { ToDo } from "./ToDo";


export const ToDoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todo: todo}]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(todos);
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.todo = prompt('Edit Task', todo.todo);
      }
      return todo;
    }));
  }

  return (
		<div className='TodoWrapper'>
			<h1>ToDo List</h1>
			<ToDoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				<ToDo
          key={index}
					task={todo}
					deleteTodo={deleteTodo}
          editTodo={editTodo}
				/>
			))}
		</div>
	);
}

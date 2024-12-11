import { EditToDoForm } from './EditToDoForm';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';
import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const ToDoWrapper = () => {

  const { todos } = useContext(TodosContext);

	return (
		<div className='TodoWrapper'>
			<h1>ToDo List</h1>
			<ToDoForm />
			{todos.map((todo, index) => todo.isEditing ? (
					<EditToDoForm 
            key={index}
            task={todo}
          />
				  ) : (
					<ToDo
						key={index}
						task={todo}
					/>
				)
      )}
		</div>
	);
}

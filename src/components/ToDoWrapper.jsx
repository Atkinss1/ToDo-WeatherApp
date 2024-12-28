import { useTodosContext } from '../hooks/TodosContext';
import { EditToDoForm } from './EditToDoForm';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';

/**
 * ToDoWrapper
 * @returns {JSX.Element} - returns a div containing the ToDoForm and ToDo components
 */
export const ToDoWrapper = () => {
	const { todos } = useTodosContext();

	return (
		<div className='TodoWrapper'>
			<h1>ToDo List</h1>
			<ToDoForm />
			{todos.map((todo, index) =>
				todo.isEditing ? (
					<div
						key={index}
						className='TodoContainer'
					>
						<EditToDoForm task={todo} />
					</div>
				) : (
					<div
						key={index}
						className='TodoContainer'
					>
						<ToDo task={todo} />
					</div>
				)
			)}
		</div>
	);
};

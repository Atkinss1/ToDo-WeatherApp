import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

export const ToDo = ({ task }) => {
	const { deleteTodo, editTodo, toggleComplete } = useContext(TodosContext);

	return (
		<div className={`Todo`}>
			<p
				onClick={() => toggleComplete(task.id)}
				className={`${task.completed ? 'completed' : 'task'}`}
			>
				{task.title}
			</p>
			<div className='Todo'>
				<FontAwesomeIcon
					icon={faPenToSquare}
					className='edit-icon'
					onClick={() => editTodo(task.id)}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className='delete-icon'
					onClick={() => deleteTodo(task.id)}
				/>
			</div>
		</div>
	);
};

ToDo.propTypes = {
	task: PropTypes.object.isRequired,
};

import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useTodosContext } from '../hooks/TodosContext';


/**
 * ToDo component
 * @param {object} task - object containing the task to be displayed 
 * @returns {JSX.Element} - returns a div containing the task and edit and delete icons
 */
export const ToDo = ({ task }) => {
	const { deleteTodo, editTodo, toggleComplete } = useTodosContext();

	return (
		<div
			className={`Todo`}
			id='[data-test=new-todo]'
		>
			<div className='Todo-details-wrapper'>
				<div className='Todo-details'>
					<p
						onClick={() => toggleComplete(task.id)}
						className={`${task.completed ? 'completed' : 'task'}`}
					>
						{task.title}
					</p>
					<p
						onClick={() => toggleComplete(task.id)}
						className={`${task.completed ? 'completed' : 'task'}`}
					>
						{task.description}
					</p>
				</div>
			</div>
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

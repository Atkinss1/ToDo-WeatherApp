import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


export const ToDo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
	
	return (
		<div className={`Todo`}>
			<p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : 'task'}`}>{task.todo}</p>
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
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
}
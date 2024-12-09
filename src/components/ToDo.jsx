import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';


export const ToDo = ({ task, deleteTodo }) => {
	
	return (
		<div className='Todo'>
			<p>{task.todo}</p>
			<div className='Todo'>
				<FontAwesomeIcon
					icon={faPenToSquare}
					className='edit-icon'
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
  task: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired
}
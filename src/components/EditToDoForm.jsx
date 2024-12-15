import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { TodosContext } from '../context/TodosContext';

/**
 * EditToDoForm
 * @param {object} task - object containing the task to be edited
 * @returns {JSX.Element} - returns a form to edit the task
 */

export const EditToDoForm = ({ task }) => {

  const { editTask } = useContext(TodosContext);
	
  const [value, setValue] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		editTask(task.id, value);
	};
	return (
		<form
			className='TodoFrom'
			onSubmit={handleSubmit}
		>
			<input
				onChange={(e) => setValue(e.target.value)}
				type='text'
				value={value}
				className='todo-input'
				placeholder='Update Task'
			/>
			<button
				type='submit'
				className='todo-btn'
			>
				Update Task
			</button>
		</form>
	);
};

EditToDoForm.propTypes = {
  task: PropTypes.object.isRequired
};

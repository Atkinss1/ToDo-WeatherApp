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
	
  const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title) return;
		editTask(task.id, title, description);
		setTitle('');
	};
	return (
		<form
			className='TodoForm'
			onSubmit={handleSubmit}
		>
			<input
				onChange={(e) => setTitle(e.target.value)}
				type='text'
				value={title}
				className='todo-input'
				placeholder='Update Task'
			/>
			<input
				onChange={(e) => setDescription(e.target.value)}
				type='description'
				value={description}
				className='todo-input'
				placeholder='Update Description'
			/>
			<button
				type='submit'
				className='todo-btn'
			>
				Add Task
			</button>
		</form>
	);
};

EditToDoForm.propTypes = {
  task: PropTypes.object.isRequired
};

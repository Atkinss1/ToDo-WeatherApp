import { useState } from 'react';
import PropTypes from 'prop-types';

export const EditToDoForm = ({ editTodo, task }) => {
	
  const [value, setValue] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		editTodo(task.id, value);
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
	editTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

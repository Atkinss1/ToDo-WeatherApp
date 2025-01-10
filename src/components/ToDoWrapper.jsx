import { useState } from 'react';
import { useTodosContext } from '../hooks/TodosContext';
import { DropdownMenu } from './DropdownMenu';
import { EditToDoForm } from './EditToDoForm';
import { ToDo } from './ToDo';
import { ToDoForm } from './ToDoForm';

/**
 * ToDoWrapper
 * @returns {JSX.Element} - returns a div containing the ToDoForm and ToDo components
 */
export const ToDoWrapper = () => {
	const { todos } = useTodosContext();
  const [filteredCondition, setFilteredCondition] = useState('');

  const handleFilterChange = (condition) => {
    setFilteredCondition(condition);
  };

  const filteredTodos = todos.filter((condition) => {
    if (filteredCondition === 'completed') {
      return condition.completed
    };

    if (filteredCondition === 'incomplete') {
      return !condition.completed
    };
    return true;
  });

	return (
		<div className='TodoWrapper'>
			<h1>ToDo List</h1>
      <DropdownMenu onFilterChange={handleFilterChange}/>
			<ToDoForm />
			{filteredTodos.map((todo, index) =>
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

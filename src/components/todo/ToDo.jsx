import {
  faCircleCheck,
  faCircleXmark,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTodosContext } from '@state/hooks/todosContext';
import '@styles/todo.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * ToDo component
 * @param {object} task - object containing the task to be displayed
 * @returns {JSX.Element} - returns a div containing the task and edit and delete icons
 */
export const ToDo = ({ task }) => {
  const { deleteTodo, toggleEditTodo, toggleComplete } = useTodosContext();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = (taskId) => {
    deleteTodo(taskId);
    setIsDeleting(false);
  };

  return (
    <>
      {isDeleting ? (
        <div className={`todo`}>
          <div className={'todo-details-wrapper'}>
            <div className={'todo-details'}>
              <p className={'task'}>Are you sure</p>
              <p className={'task'}>you want to delete this task?</p>
            </div>
          </div>
          <div className={'todo-icon'}>
            <FontAwesomeIcon
              onClick={() => handleDelete(task.id)}
              icon={faCircleCheck}
              className={'checkMark-icon'}
            />

            <FontAwesomeIcon
              onClick={() => setIsDeleting(false)}
              icon={faCircleXmark}
              className="cancel-delete"
            />
          </div>
        </div>
      ) : (
        <div className={`todo`}>
          <div className={'todo-details-wrapper'}>
            <div className={'todo-details'}>
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
          <div className={`todo-icon`}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={'edit-icon'}
              onClick={() => toggleEditTodo(task.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className={'delete-icon'}
              onClick={() => setIsDeleting(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

ToDo.propTypes = {
  task: PropTypes.object.isRequired,
};

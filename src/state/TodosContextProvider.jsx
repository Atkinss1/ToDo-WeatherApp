import PropTypes from 'prop-types';
import { useEffect, useState, createContext } from 'react';
import todosService from '../service/todosService';

export const TodosContext = createContext();

/**
 * ToDosContextProvider
 * @param {Node} children - children components
 * @returns {JSX.Provider} - returns the children components wrapped in the TodosContext.Provider
 */
export const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  /**
   * Fetches the tasks from the database and sets the todos state to the fetched data
   * If an error occurs, it logs the error to the console
   * @returns {Promise<object[]>} A promise that resloves to an array of task objects
   */
  const getTasks = async () => {
    try {
      const data = await todosService.getTasksAPI();

      !data ? setTodos([]) : setTodos(data);
    } catch (error) {
      throw new Error(`Failed to fetch tasks:, ${error.message}`);
    }
  };

  /**
   * Adds a new todo item to the useState and the database
   * @param {string} title - title of the new todo item
   * @returns {Promise<void>} A promise that resolves to undefined
   * @throws {Error} - If an error occurs while adding the task
   */
  const addTodo = async (title, description) => {
    try {
      // const newTodo = {
      // 	id: uuidv4(),
      // 	title,
      // 	description,
      // 	completed: false,
      // 	isEditing: false,
      // };

      const newTodo = await todosService.addTaskAPI(title, description);

      if (!newTodo) {
        console.log('error receiving response from API');
        return;
      }

      setTodos([...todos, newTodo]);
    } catch (error) {
      throw new Error(`Failed to add todo:, ${error.message}`);
    }
  };

  /**
   * Deletes a todo item from the useState and the database
   * @param {number} id - id of the todo item to be deleted
   * @returns {Promise<object>} - A promise that resolves an object with a success message
   * @throws {Error} - If an error occurs while deleting the task
   */
  const deleteTodo = async (id) => {
    try {
      await todosService.deleteTaskAPI(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      throw new Error(`Failed to delete todo:, ${error.message}`);
    }
  };

  // TODO: duplicate function; remove
  /**
   * Alters the state of isEditing property of the todo item with the given id
   * @param {number} id - id of the todo item to be edited
   * @returns {void} - returns nothing
   */
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  /**
   *
   * @param {number} id - id of the todo item to be edited
   * @param {string} newTask - new title of the todo item
   * @returns {void} - returns nothing
   */
  const editTask = async (id, newTask, newDescription) => {
    try {
      await todosService.editTaskAPI(id, newTask, newDescription);
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                title: newTask,
                description: newDescription,
                isEditing: false,
              }
            : todo
        )
      );
    } catch (error) {
      throw new Error(`Failed to edit todo:, ${error.message}`);
    }
  };

  /**
   *
   * @param {number} id - id of the todo item to be toggled
   * @returns {void} - returns nothing
   */
  const toggleComplete = async (id) => {
    try {
      await todosService.toggleCompleteAPI(id);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (error) {
      throw new Error(`Failed to toggle complete:, ${error.message}`);
    }
  };

  // useEffects
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TodosContext.Provider
      value={{ addTodo, deleteTodo, editTodo, editTask, toggleComplete, todos }}
    >
      {children}
    </TodosContext.Provider>
  );
};

TodosContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodosContextProvider;

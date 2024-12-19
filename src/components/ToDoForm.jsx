import { useContext, useState, useRef, useEffect } from "react";
import { TodosContext } from "../context/TodosContext";


/**
 * ToDoForm
 * @returns {JSX.Element} - returns a form to add a new task
 */
export const ToDoForm = () => {

  const { addTodo } = useContext(TodosContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTodo(title, description);
    setTitle('');
    setDescription('');
    inputRef.current.focus();
  };


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        ref={inputRef} 
        onChange={(e) => setTitle(e.target.value)} 
        type="text" 
        value={title}
        className="todo-input" 
        placeholder="What is the task to do today?"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="description"
        value={description}
        className="todo-input"
        placeholder="Description" />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

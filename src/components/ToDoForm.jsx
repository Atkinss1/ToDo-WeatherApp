import { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContext";

export const ToDoForm = () => {

  const { addTodo } = useContext(TodosContext);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form className='TodoFrom' onSubmit={handleSubmit}>
      <input 
        onChange={(e) => setValue(e.target.value)} 
        type="text" 
        value={value}
        className="todo-input" 
        placeholder="What is the task to do today?"
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  )
}

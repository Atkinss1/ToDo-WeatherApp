import { createContext, useContext } from 'react';

export const TodosContext = createContext();

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodosProvider');
  }

  return context;
};

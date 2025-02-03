import { useContext } from 'react';
import { TodosContext } from '../TodosContextProvider';

export const useTodosContext = () => {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodosProvider');
  }

  return context;
};

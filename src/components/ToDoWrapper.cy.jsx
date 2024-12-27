import React from 'react';
import { ToDoWrapper } from './ToDoWrapper';
import { TodosContext } from '../hooks/TodosContext';

describe('<ToDoWrapper />', () => {
  it('renders', () => {
    
    const contextValue ={
      todos: [
        {
          title: 'Test the ToDoWrapper component',
          description: 'Test the ToDoWrapper component',
          isEditing: false
        }
      ]
    }

    cy.mount(
      <TodosContext.Provider value={contextValue}>
        <ToDoWrapper />
      </TodosContext.Provider>
    )

    // Check if the ToDoWrapper component is rendered
    cy.get('.TodoWrapper').should('exist');

    // Check if the ToDoForm component is rendered
    cy.get('.TodoForm').should('exist');

    // Check if the ToDo component is rendered
    cy.get('.Todo').should('exist');

    // Check if the EditToDoForm component is not rendered
    cy.get('.EditToDoForm').should('not.exist');

  })
})
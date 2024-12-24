import React from 'react'
import { ToDo } from './ToDo'
import { TodosContext } from '../context/TodosContext'

describe('<ToDo />', () => {
  it('renders', () => {

    const task = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      completed: false
    };
    
    const contextValue = {
      deleteTodo: cy.stub(),
      editTodo: cy.stub(),
      toggleComplete: cy.stub().callsFake(() => {
        task.completed = !task.completed;
      })
    }

    cy.mount(
			<TodosContext.Provider value={contextValue}>
				<ToDo task={task}/>
			</TodosContext.Provider>
		);

    cy.get('.Todo').first().should('exist');
    cy.get('.Todo').last().should('exist');
    cy.get('.Todo-details-wrapper').should('exist');
    cy.get('.Todo-details').should('exist');
    cy.get('.task').should('exist');
    cy.get('.edit-icon').should('exist');
    cy.get('.delete-icon').should('exist');
    cy.get('.Todo-details p').first().click();
    cy.get('.Todo-details p').last().click();
    cy.get('.edit-icon').click();
    cy.get('.delete-icon').click();
  })
})
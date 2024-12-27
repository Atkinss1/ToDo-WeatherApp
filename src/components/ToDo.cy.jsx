import React from 'react'
import { ToDo } from './ToDo'
import { TodosContext } from '../hooks/TodosContext'

describe('<ToDo />', () => {
  it('renders', () => {

    const task = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      isEditing: false,
      completed: false,
      isDeleted: false
    };
    
    const contextValue = {
      deleteTodo: cy.stub().callsFake(() => {
        task.isDeleted = !task.isDeleted;
      }),
      editTodo: cy.stub().callsFake(() => {
        task.isEditing = !task.isEditing;
      }),
      toggleComplete: cy.stub().callsFake(() => {
        task.completed = !task.completed;
      }),
    }

    cy.mount(
			<TodosContext.Provider value={contextValue}>
				<ToDo task={task}/>
			</TodosContext.Provider>
		);

    // Check if the todo container is rendered
    cy.get('.Todo').first().should('exist');
    cy.get('.Todo-details-wrapper').should('exist');

    // Check if the task is rendered
    cy.get('.Todo-details').should('exist');
    cy.get('.task').first().should('have.text', 'Test Task');
    
    // Check if the task is marked as completed
    cy.get('.Todo-details p').first().click().then(() => {
      expect(contextValue.toggleComplete).to.have.been.called;
      expect(task.completed).to.be.true;
    });

    // Check if the description is rendered
    cy.get('.Todo').last().should('exist');
    cy.get('.task').last().should('have.text', 'Test Description');

    // Check if the task is marked as completed when description is clicked
    cy.get('.Todo-details p').last().click().then(() => {
      expect(contextValue.toggleComplete).to.have.been.called;
      expect(task.completed).to.be.false;
    });

    // Check if the edit icon is rendered
    cy.get('.edit-icon').should('exist');
    // Check if the edit icon is clicked and the editTodo function is called
    cy.get('.edit-icon').click().then(() => {
      expect(contextValue.editTodo).to.have.been.called;
      expect(task.isEditing).to.be.true;
    });

    // Check if the delete icon is rendered
    cy.get('.delete-icon').should('exist');
    // Check if the delete icon is clicked and the deleteTodo function is called
    cy.get('.delete-icon').click().then(() => {
      expect(contextValue.deleteTodo).to.have.been.called;
      expect(task.isDeleted).to.be.true;
    });
    
    
  })
})
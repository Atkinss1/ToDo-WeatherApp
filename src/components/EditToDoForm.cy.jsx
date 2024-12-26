import React from 'react'
import { EditToDoForm } from './EditToDoForm'
import { TodosContext } from '../hooks/TodosContext'

describe('<EditToDoForm />', () => {
  it('renders', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      isEditing: true,
      completed: false
    };

    const contextValue = {
      editTask: cy.stub(),
      editTodo: cy.stub().callsFake(() => {
        task.isEditing = false;
      }),
    }

    cy.mount(
    <TodosContext.Provider value={contextValue}>
      <EditToDoForm task={task}/>
    </TodosContext.Provider>
    );

    // Check if the form is rendered
    cy.get('.TodoForm').should('exist');

    // Check if the input fields are rendered
    cy.get('.todo-input').should('have.length', 2);
    
    // Check if the input fields are filled
    cy.get('.todo-input').first().should('have.value', 'Test Task');
    cy.get('.todo-input').last().should('have.value', 'Test Description');

    // Check if the button is rendered
    cy.get('.todo-btn').should('exist');

    // Check if buttons are rendered
    cy.get('.todo-btn').should('have.length', 2);

    // Check if the button text is correct
    cy.get('.todo-btn').first().should('have.text', 'Update Task');

    // Check if the button text is correct
    cy.get('.todo-btn').last().should('have.text', 'Cancel');

    // Check if the button is clicked and the task is updated
    cy.get('.todo-btn').first().click().then(() => {
      expect(contextValue.editTask).to.have.been.called;
    });

    // Check if the button is clicked and the task update is cancelled
    cy.get('.todo-btn').last().click().then(() => {
      expect(contextValue.editTodo).to.have.been.called;
      expect(task.isEditing).to.be.false;
    });

  })
})
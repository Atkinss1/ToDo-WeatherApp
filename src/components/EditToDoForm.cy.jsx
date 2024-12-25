import React from 'react'
import { EditToDoForm } from './EditToDoForm'
import { TodosContext } from '../context/TodosContext'

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

    cy.get('.TodoForm').should('exist');
    cy.get('.todo-input').first().should('have.value', 'Test Task');

    cy.get('.todo-input').last().should('exist');
    cy.get('.todo-input').last().should('have.value', 'Test Description');

    cy.get('.todo-btn').should('exist');
    cy.get('.todo-btn').first().should('have.text', 'Update Task');
    cy.get('.todo-btn').last().should('have.text', 'Cancel');
    cy.get('.todo-btn').last().click().then(() => {
      expect(contextValue.editTodo).to.have.been.called;
      expect(task.isEditing).to.be.false;
    });

  })
})
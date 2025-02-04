import React from 'react';
import { ToDo } from '../components/ToDo';
import { TodosContext } from '../state/TodosContextProvider';

describe('<ToDo />', () => {
  it('renders', () => {
    cy.fixture('tasks.json').then((tasks) => {
      // Parse fixutre data to a single todo
      const todo = tasks.todos[0];

      // Create a context value object with the required functions
      const contextValue = {
        deleteTodo: cy.stub().callsFake(() => {
          todo.isDeleted = !todo.isDeleted;
        }),
        toggleEditTodo: cy.stub().callsFake(() => {
          todo.isEditing = !todo.isEditing;
        }),
        toggleComplete: cy.stub().callsFake(() => {
          todo.completed = !todo.completed;
        }),
      };

      // Mount the ToDo component
      cy.mount(
        <TodosContext.Provider value={contextValue}>
          <ToDo task={todo} />
        </TodosContext.Provider>
      );

      // Check if the todo container is rendered
      cy.get('.todo').first().should('exist');
      cy.get('.todo-details-wrapper').should('exist');

      // Check if the task is rendered
      cy.get('.todo-details').should('exist');
      cy.get('.task').first().should('have.text', 'Test Task');

      // Check if the task is marked as completed
      cy.get('.todo-details p')
        .first()
        .click()
        .then(() => {
          expect(contextValue.toggleComplete).to.have.been.called;
          expect(todo.completed).to.be.true;
        });

      // Check if the description is rendered
      cy.get('.todo').last().should('exist');
      cy.get('.task').last().should('have.text', 'Test Description');

      // Check if the task is marked as completed when description is clicked
      cy.get('.todo-details p')
        .last()
        .click()
        .then(() => {
          expect(contextValue.toggleComplete).to.have.been.called;
          expect(todo.completed).to.be.false;
        });

      // Check if the edit icon is rendered
      cy.get('.edit-icon').should('exist');
      // Check if the edit icon is clicked and the toggleEditTodo function is called
      cy.get('.edit-icon')
        .click()
        .then(() => {
          expect(contextValue.toggleEditTodo).to.have.been.called;
          expect(todo.isEditing).to.be.true;
        });

      // Check if the delete icon is rendered
      cy.get('.delete-icon').should('exist');
      // Check if the delete icon is clicked and the deleteTodo function is called
      cy.get('.delete-icon')
        .click()
        .then(() => {
          expect(contextValue.deleteTodo).to.have.been.called;
          expect(todo.isDeleted).to.be.true;
        });
    });
  });
});

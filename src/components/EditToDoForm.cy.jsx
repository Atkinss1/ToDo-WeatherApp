import React from 'react';
import { EditToDoForm } from './EditToDoForm';
import { TodosContextProvider } from '../context/TodosContextProvider';

describe('<EditToDoForm />', () => {
  it('renders and interacts correctly', () => {
    
    
    let taskSubmitted = false;

    const editTaskStub = cy.stub().callsFake(() => {
      taskSubmitted = true;
      console.log('Task Submitted');
    });

    const editTodoStub =  cy.stub().callsFake(() => {
			console.log('editTodo is called');
		});
    
    // Load fixture data
    cy.fixture('tasks.json').then((tasks) => {
      
      const contextValue = {
        editTask: editTaskStub,
        editTodo: editTodoStub,
      };

      // Parse the fixture data
      const task = tasks.todos;

      // Intercept the getTasks and editTask requests
      cy.intercept('GET', 'http://localhost:3000/getTasks', {
        statusCode: 200,
        body: task,
      }).as('getTasks');

      cy.intercept('PUT', 'http://localhost:3000/editTask', {
        statusCode: 200,
        body: {
          id: 1,
          title: 'Test Task Changed',
          description: 'Test Description Changed',
          isEditing: false,
          completed: false,
        },
      }).as('editTask');

      // Mount the EditToDoForm component
      cy.mount(
        <TodosContextProvider value={contextValue}>
          <EditToDoForm task={task[0]} />
        </TodosContextProvider>
      );

      // Wait for the getTasks request to complete and verify the response
      cy.wait('@getTasks').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body).to.have.length(1);
        expect(interception.response.body[0].id).to.eq(1);
      });

      // Check if the form is rendered
      cy.get('.TodoForm').should('exist');

      // Check if the input fields are rendered
      cy.get('.todo-input').should('have.length', 2);

      // Check if the input fields are filled
      cy.get('.todo-input').first().should('have.value', 'Test Task');
      cy.get('.todo-input').last().should('have.value', 'Test Description');

      // Check if the buttons are rendered
      cy.get('.todo-btn').should('have.length', 2);

      // Check if the button text is correct
      cy.get('.todo-btn').first().should('have.text', 'Update Task');
      cy.get('.todo-btn').last().should('have.text', 'Cancel');

      // Change input fields, and verify
      cy.get('.todo-input').first().clear().type('Test Task Changed').should('have.value', 'Test Task Changed');
      cy.get('.todo-input').last().clear().type('Test Description Changed').should('have.value', 'Test Description Changed');

      cy.log('Before Clicking Update Button');

      // Click the update button
      cy.get('.todo-btn').first().click()

      // Wait for the editTask request to complete and verify the response
      cy.wait('@editTask').then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.id).to.eq(1);
        expect(interception.response.body.title).to.eq('Test Task Changed');
      });
    });
  });
});

import { ToDoForm } from './ToDoForm';
import { TodosContext } from '../context/TodosContext';

describe('<ToDoForm />', () => {
  it('renders', () => {
    
    let taskSubmitted = false;

    const contextValue ={
      addTodo: cy.stub().callsFake(() => {
        taskSubmitted = true;
      }),
    };

    cy.mount(
      <TodosContext.Provider value={contextValue}>
        <ToDoForm />
      </TodosContext.Provider>
    );
    
    // Check if the form is rendered
    cy.get('.TodoForm').should('exist');

    // Check if the input fields are rendered
    cy.get('.todo-input').should('have.length', 2);

    // Check if the input fields are empty
    cy.get('.todo-input').first().should('have.value', '');
    cy.get('.todo-input').last().should('have.value', '');

    // write in the input fields
    cy.get('.todo-input').first().type('Test Task');
    cy.get('.todo-input').last().type('Test Description');

    // Check if the input fields are filled
    cy.get('.todo-input').first().should('have.value', 'Test Task');
    cy.get('.todo-input').last().should('have.value', 'Test Description');

    // Check if the button is rendered
    cy.get('.todo-btn').should('exist');
    cy.get('.todo-btn').should('have.text', 'Add Task');

    // Click the button
    cy.get('.todo-btn').click().then(() => {
      expect(contextValue.addTodo).to.have.been.called;
      expect(taskSubmitted).to.be.true;
    });

  })
})
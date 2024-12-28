describe('to-do Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('should display ten items by default', () => {
    cy.get('.TodoContainer').should('have.length', 10);
  });

  it('should display the to-do form', () => {
    cy.get('.TodoForm').should('exist');
    cy.get('.todo-input').should('have.length', 2);
  });
});
import React from 'react';
import { ToDoWrapper } from '../components/ToDoWrapper';
import { TodosContext } from '../state/TodosContextProvider';

describe('<ToDoWrapper />', () => {
	it('renders', () => {
		cy.fixture('tasks.json').then((todos) => {
			// Mount the ToDoWrapper component
			cy.mount(
				<TodosContext.Provider value={todos}>
					<ToDoWrapper />
				</TodosContext.Provider>
			);

			// Check if the ToDoWrapper component is rendered
			cy.get('.TodoWrapper').should('exist');

			// Check if the ToDoForm component is rendered
			cy.get('.TodoForm').should('exist');

			// Check if the ToDo component is rendered
			cy.get('.Todo').should('exist');

			// Check if the EditToDoForm component is not rendered
			cy.get('.EditToDoForm').should('not.exist');
		});
	});
});

-- Clear data from tables
DELETE FROM tasks;

-- Insert data into tables

INSERT INTO tasks (title, description, completed, time_of_completion, created_at, updated_at, deleted, deleted_at, is_editing)
VALUES 
('Write Unit Tests', 'Write unit tests for the new feature module', FALSE, NULL, NOW(), NOW(), FALSE, NULL, FALSE),
('Fix Bug #123', 'Investigate and fix the issue causing the app to crash on startup', TRUE, NOW(), NOW(), NOW(), FALSE, NULL, FALSE),
('Update Documentation', 'Update the project documentation to include the latest changes', FALSE, NULL, NOW(), NOW(), FALSE, NULL, FALSE),
('Deploy to Production', 'Deploy the latest version of the application to the production environment', TRUE, NOW(), NOW(), NOW(), FALSE, NULL, FALSE),
('Code Review', 'Review the code submitted by team members and provide feedback', FALSE, NULL, NOW(), NOW(), FALSE, NULL, FALSE);
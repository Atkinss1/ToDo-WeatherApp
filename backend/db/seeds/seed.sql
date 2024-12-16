-- Clear data from tables
DELETE FROM tasks;

-- Insert data into tables

INSERT INTO tasks (title, description, completed, created_at, deleted, deleted_at) VALUES 
  ('Go Shopping', 'Buy milk, eggs, and bread', FALSE, NOW(), FALSE, NULL),
  ('Play Games', 'Rocket Leage at 9pm', FALSE, NOW(), FALSE, NULL),
  ('Shovel Walkway', 'Snow is coming', FALSE, NOW(), FALSE, NULL),
  ('Walk Dog', 'Around the block', FALSE, NOW(), FALSE, NULL),
  ('Take Out Trash', 'Wednesday night', FALSE, NOW(), FALSE, NULL),
  ('Clean House', 'Dishes, laundry, and vacuum', FALSE, NOW(), FALSE, NULL),
  ('Workout', 'Run 5 miles', FALSE, NOW(), FALSE, NULL),
  ('Read Book', 'Finish chapter 3', FALSE, NOW(), FALSE, NULL),
  ('Call Mom', 'Check in on her', FALSE, NOW(), FALSE, NULL),
  ('Watch Movie', 'The Godfather', FALSE, NOW(), FALSE, NULL),
  ('Cook Dinner', 'Chicken Alfredo', FALSE, NOW(), FALSE, NULL),
  ('Go to Bed', 'Before 10pm', FALSE, NOW(), FALSE, NULL);
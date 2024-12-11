-- Clear data from tables
DELETE FROM tasks;

-- Insert data into tables

INSERT INTO tasks (title, description, completed, created_at)
VALUES 
  ('Go Shopping', 'Buy milk, eggs, and bread', FALSE, NOW()),
  ('Play Games', 'Rocket Leage at 9pm', FALSE, NOW()),
  ('Shovel Walkway', 'Snow is coming', FALSE, NOW()),
  ('Clean House', 'Dishes, laundry, and vacuum', FALSE, NOW()),
  ('Workout', 'Run 5 miles', FALSE, NOW()),
  ('Read Book', 'Finish chapter 3', FALSE, NOW()),
  ('Call Mom', 'Check in on her', FALSE, NOW()),
  ('Watch Movie', 'The Godfather', FALSE, NOW()),
  ('Cook Dinner', 'Chicken Alfredo', FALSE, NOW()),
  ('Go to Bed', 'Before 10pm', FALSE, NOW())
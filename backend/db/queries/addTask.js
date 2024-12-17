/**
 * 
 * @param {client} db - database client 
 * @param {string} task - title of the new task
 * @param {string} description - description of the new task
 * @returns {Promise} - returns a promise containing success message
 */
export const addTask = (db, task, description) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (title, description) VALUES ($1, $2)';
    db.query(sql, [task, description], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve({ success: true, message: 'Task added successfully' });
      }
    })
  });
};
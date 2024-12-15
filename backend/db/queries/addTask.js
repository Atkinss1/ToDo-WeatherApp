/**
 * 
 * @param {client} db - database client 
 * @param {string} task - title of the new task
 * @returns {Promise} - returns a promise containing success message
 */
export const addTask = (db, task) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (title) VALUES ($1)';
    db.query(sql, [task], (err, ) => {
      if (err) {
        reject(err);
      } else {
        resolve({ success: true, message: 'Task added successfully' });
      }
    })
  });
};
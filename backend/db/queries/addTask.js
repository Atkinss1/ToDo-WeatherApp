/**
 * 
 * @param {client} db - database client 
 * @param {string} task - title of the new task
 * @returns {Promise} - returns a promise containing the result of the query
 */
export const addTask = (db, task) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (title) VALUES ($1)';
    db.query(sql, [task], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  });
};
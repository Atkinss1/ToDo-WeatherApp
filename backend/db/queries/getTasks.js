/**
 * Fetches all tasks from the database
 * @param {client} db - database client
 * @returns {Promise<object[]>} - returns a promise containing an array of objects
 */
export const getTasks = (db) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM tasks`;
    db.query(sql, (err, results) => {
      if (err) {
        console.log('Failed to fetch tasks:', err);
        return reject(err);
      }
      console.log('Query results', results.rows);
      if (results.rows.length > 0) {
        return resolve(results.rows);
      }
      console.log('No tasks found');
      return resolve([]);
    })
  });
};
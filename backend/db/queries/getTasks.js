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
        reject(err);
      } else {
        console.log(results.rows);
        resolve(results.rows);
      }
    })
  });
};
/**
 * Deletes a task from the database
 * @param {client} db - database client
 * @param {number} id - id of the task to be deleted
 * @returns {Promise} - returns a promise containing the result of the query
 */
export const deleteTask = (db, id) => {
  return new Promise ((resolve, reject) => {
    const sql = `DELETE FROM tasks WHERE id = $1`;
    db.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
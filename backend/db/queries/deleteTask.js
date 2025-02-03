/**
 * Deletes a task from the database
 * @param {client} db - database client
 * @param {number} id - id of the task to be deleted
 * @returns {Promise} - returns a promise containing the result of the query
 */
export const deleteTask = (db, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE tasks SET deleted_at = NOW(), deleted = true WHERE id = $1`;
    db.query(sql, [id], (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ success: true, message: 'Task deleted successfully' });
      }
    });
  });
};

/**
 * @db - database client
 * @id - id of the task to be marked as completed
 * @returns - an object with a success message
 */

export const completeTask = async (db, id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE tasks SET completed = NOT completed,
                time_of_completion = CASE
                    WHEN NOT completed THEN CURRENT_TIMESTAMP ELSE NULL
                    END
                WHERE id = $1`;
    db.query(sql, [id], (error) => {
      if (error) {
        return reject({ error: `Failed to mark task as completed: ${error}` });
      }

      return resolve({ message: 'Task marked as completed' });
    });
  });
};

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
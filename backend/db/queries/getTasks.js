// Selecting all tasks from db

export const getTasks = (db) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM tasks`;
    db.query(sql, (err, results) => {
      
      if (err) {
        reject(err);
      } else {
        console.log('results', results.rows);
        resolve(results);
      }
    })
  });
};
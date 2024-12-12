// add new task to database

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
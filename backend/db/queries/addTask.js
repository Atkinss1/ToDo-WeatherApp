import e from "express";
import { resolveConfig } from "vite";

/**
 * 
 * @param {client} db - database client 
 * @param {string} task - title of the new task
 * @param {string} description - description of the new task
 * @returns {Promise} - returns a promise containing success message
 */
export const addTask = (db, task, description) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
    db.query(sql, [task, description], (err, results) => {
      if (err) {
        console.log('error executing sql: ', err);
        return reject(err);
      } 

      if (results.rows.length > 0) {
        const response = results.rows[0];
        
        const todo = {
          id: response.id,
          title: response.title,
          description: response.description,
          completed: response.completed,
          isEditing: response.isediting,
        };
        return resolve(todo);
        
      } else {
        console.log('no rows returned');
        return resolve(null);
      }
    }
    )
  });
};
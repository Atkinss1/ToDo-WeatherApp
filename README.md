# ToDo App

## Overview
This is a simple ToDo application with a PostgreSQL database. It features a front-end built with React and a back-end using Express. Follow the instructions below to set up and run the application.

## Prerequisites
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [PostgreSQL](https://www.postgresql.org/) (Version 12 or higher recommended)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone git@github.com:Atkinss1/ToDo.git
cd ToDo
```

1. Navigate to the `backend/db` folder:
   ```bash
   cd backend/db
   ```

### 2. Create the PostgreSQL Database
1. Open a PostgreSQL client (e.g., `psql`).
2. Create a new database:
   ```sql
   CREATE DATABASE todo;
   ```
3. Connect to the database:
   ```sql
   \c todo
   ```

### 3. Run the Database Schema and Seeds

1. Run the schema and seed files in your PostgreSQL client:
   ```sql
   \i schema/schema.sql
   \i seeds/seeds.sql
   ```

### 4. Update Database Credentials
1. Navigate to the `backend` folder.
2. create a `.env` file.
3. Update the PostgreSQL credentials with your database configuration:
   ```javascript
   VITE_HOST=localhost
   VITE_USER='your user'
   VITE_PASSWORD='your password'
   VITE_DATABASE=todo
   ```

---

## Running the Application
1. Install dependencies in the root `ToDo` and `backend` folder:
   ```bash
   npm install
   ```

2. Navigate back to the Todo root directory and start both the front-end and back-end simultaneously:
   ```bash
   npm run start:all
   ```

The application should now be running on your local machine.

---

## Troubleshooting
- Ensure PostgreSQL is running.
- Check database connection details.
- Verify correct schema and seed data setup.

Happy coding! 🚀


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_management'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes

// Get all employees
app.get('/employees', (req, res) => {
  connection.query('SELECT * FROM employees', (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error retrieving employees from database');
      return;
    }
    res.json(results);
  });
});

// Get employee by ID
app.get('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  connection.query('SELECT * FROM employees WHERE id = ?', [employeeId], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error retrieving employee from database');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Employee not found');
      return;
    }
    res.json(results[0]);
  });
});

// Add a new employee
app.post('/employees', (req, res) => {
  const { name, email, department } = req.body;
  connection.query('INSERT INTO employees (name, email, department) VALUES (?, ?, ?)', [name, email, department], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error adding employee to database');
      return;
    }
    res.status(201).send('Employee added successfully');
  });
});

// Update employee by ID
app.put('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  const { name, email, department } = req.body;
  connection.query('UPDATE employees SET name = ?, email = ?, department = ? WHERE id = ?', [name, email, department, employeeId], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error updating employee in database');
      return;
    }
    res.send('Employee updated successfully');
  });
});

// Delete employee by ID
app.delete('/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  connection.query('DELETE FROM employees WHERE id = ?', [employeeId], (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ' + err.stack);
      res.status(500).send('Error deleting employee from database');
      return;
    }
    res.send('Employee deleted successfully');
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

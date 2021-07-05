const express = require('express');
const app = express();

const userRoutes = require('./routes/user');

// Connexion à mysql
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "groupomania"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
// Fin

// Gestion des paramètres CORS
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// Fin

app.use(express.json());

module.exports = app;
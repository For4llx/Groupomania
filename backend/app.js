const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');

// Connexion à mysql


const sequelize = new Sequelize('groupomania', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// FIN

// Gestion des paramètres CORS
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// Fin

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

module.exports = app;
global.sequelize = sequelize;
// Connexion à mysql
/*const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "groupomania"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
// Fin

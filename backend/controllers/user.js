const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const User = require("../models/user");


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) 
      .then(hash => { 
        const user = new User
        (
          req.body.lastName,
          req.body.firstName,
          req.body.email,
          hash
        );
        connection.query(
          `INSERT INTO User VALUES
          (
            user.lastName,
            user.firstName,
            user.email,
            user.password
          )`,
        log,
        function (error, results, fields) {
          if (error) {
            return connection.rollback(function() {
              throw error;
            });
          }
      })})
      .catch(error => res.status(500).json({ error }));
  };
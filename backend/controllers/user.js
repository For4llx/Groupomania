const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const User = require("../models/user");
const app = require("../app");

exports.signup = (req, res, next) => {
  (async () => {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    console.log(user.toJSON());
    res.status(201).json({ message: 'Utilisateur créé !' });
  })();
}
/*
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) 
    .then
    (
      function (hash)
      {
        const user = User.create
        (
          {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
          }
        )
        console.log(user);
      }
    )
    .catch(error => res.status(500).json({ error }));
  };
  */
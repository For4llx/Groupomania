const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mysql = require("mysql");
const User = require("../models/user");
const app = require("../app");

exports.signin = (req, res, next) => {
  (async function () {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user === null) {
      res.status(401).json({ error: "Utilisateur non trouvé !" });
    } else {
      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!correctPassword) {
        res.status(401).json({ error: "Mot de passe incorrect !" });
      }
    }
    res.status(200).json({
      userId: user.userId,
      token: jwt.sign({ userId: user.userId }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      }),
    });
  })();
};
exports.signup = (req, res, next) => {
  (async function () {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hash,
    });
    console.log(user.toJSON());
    res.status(201).json({
      userId: user.userId,
      token: jwt.sign({ userId: user.userId }, "RANDOM_TOKEN_SECRET", {
        expiresIn: "24h",
      }),
    });
  })();
};
exports.delete = (req, res, next) => {
  (async function () {
    await User.destroy({ where: { userId: req.body.userId } });
    res.status(200).json({ message: "Utilisateur Supprimé !" });
  })();
};
exports.getUserName = (req, res, next) => {
  (async function () {
    const user = await User.findOne({ where: { userId: req.body.userId } });
    res
      .status(200)
      .json({ lastName: user.lastName, firstName: user.firstName });
  })();
};

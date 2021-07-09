const { Sequelize, DataTypes } = require('sequelize');

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

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
}
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
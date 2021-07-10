const { Sequelize, DataTypes, UUID } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
  }
  });

const Message = sequelize.define('Message', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
      type: DataTypes.STRING,
      allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Message;
const { Sequelize, DataTypes, UUID } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false
  }
  });

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
},
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
module.exports = User;
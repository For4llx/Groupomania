const { Sequelize, DataTypes, UUID } = require("sequelize");

const sequelize = new Sequelize("groupomania", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "./images/blank-profile-picture-973460_640.png1626680325113.png",
    },
  },
  {
    // Autre modèle d'options
  }
);

module.exports = User;

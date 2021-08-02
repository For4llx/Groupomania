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
      is: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž,.'-]+$/i,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      is: /^[a-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž,.'-]+$/i,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      is: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      is: /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/i,
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
    Admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    // Autre modèle d'options
  }
);

module.exports = User;

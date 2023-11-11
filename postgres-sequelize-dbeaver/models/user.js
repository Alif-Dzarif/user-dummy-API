'use strict';
const bcrypt = require('bcrypt')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: { msg: 'wrong email format' },
        notEmpty: {  msg: "Email is required" }
      }
    },
    password: {
      type: DataTypes.STRING,
      unique: { msg: "Email must be unique" },
      validate: {
        notEmpty: { msg: "Password is required" }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((user) => {
    user.password = bcrypt.hashSync(user.password, 10)
  })

  User.beforeUpdate((user) => {
    user.password = bcrypt.hashSync(user.password, 10)
  })

  return User;
};
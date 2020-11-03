const { DataTypes } = require("sequelize");
const md5 = require("md5");

module.exports = function (sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        defaultValue: "first name",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      last_name: {
        defaultValue: "last name",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
    },
    { timestamps: false }
  );
};

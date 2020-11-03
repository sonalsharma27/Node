const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "blogs",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      blog_name: {
        defaultValue: "name",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      content: {
        defaultValue: "content",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER(5)
      },
    },
    { timestamps: false }
  );
};

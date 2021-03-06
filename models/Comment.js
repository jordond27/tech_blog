const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      foreignKey: true,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize,
    // timestamps: true,
    // freezeTableName: true,
    // underscored: true,
    modelName: "Comment",
  }
);

module.exports = Comment;

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Url = sequelize.define(
  "Url",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    long_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    short_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    click_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "urls",
    timestamps: false,
  },
);

export default Url;

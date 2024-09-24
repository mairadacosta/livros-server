import { DataTypes } from "sequelize"
import { sequelize } from "../config/config.js"

export const User = sequelize.define("Usuarios", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,  
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false           
});




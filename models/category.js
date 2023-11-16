const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const Category = db.define('category', {

    category_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    user: {
        type: DataTypes.UUID,
        allowNull: false,
    }
}, {
    timestamps: false
}
)

module.exports = Category;
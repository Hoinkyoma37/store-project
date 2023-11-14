const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const Category = db.define('item', {

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
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Category;
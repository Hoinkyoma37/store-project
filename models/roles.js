const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const Role = db.define('item', {
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Role;
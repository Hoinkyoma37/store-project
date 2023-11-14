const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const User = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM,
        values: ['ADMIN_ROLE', 'USER_ROLE'],
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    google: {
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false
});

module.exports = User;
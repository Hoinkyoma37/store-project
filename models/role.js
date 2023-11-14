const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const Role = db.define('role', {

    role_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER_ROLE'
    }
}, {
    timestamps: false
}
)

module.exports = Role;
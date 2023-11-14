const { DataTypes, UUIDV4 } = require('sequelize');

const { db } = require('../db/db');

const User = db.define('users', {

    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
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
        allowNull: false,
        values: ['USER_ROLE', 'ADMIN_ROLE']
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: false
});

// User.hasOne(Role, {
//     foreignKey: DataTypes.UUID,
//     allowNull: false,
// });

// User.hasMany(Item);

//One-to-one  => belongsTo, hasOne

//Sequelize Associations .hasOne(), .belongsTo(), .hasMany(), .belongsToMany()

module.exports = User;
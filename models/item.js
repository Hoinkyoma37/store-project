const { DataTypes } = require('sequelize');

const { db } = require('../db/db');

const Item = db.define('item', {
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    image: {
        type: DataTypes.STRING
    }
})

module.exports = Item;
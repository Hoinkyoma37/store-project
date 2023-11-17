const { DataTypes } = require("sequelize");
const Category = require("./category");

// const Role = require("./role");

const User = require("./user");
const Item = require("./item");


User.hasMany(Category, {
    foreignKey: {
        type: DataTypes.UUID
    }
})

Category.belongsTo(User);

User.hasMany(Item, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

Item.belongsTo(User);

Category.hasMany(Item, {
    foreignKey: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

Item.belongsTo(Category)
const { Sequelize } = require('sequelize');


const db = new Sequelize('pro', 'postgres', 'x', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = db;
const Sequelize = require("sequelize");
const db = new Sequelize('messenger', 'postgres', 'Kevthebest12@', {
  host: 'localhost',
  dialect: 'postgres'
})/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' 

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
  logging: false
});*/

module.exports = db;

const Sequelize = require("sequelize");




const db = new Sequelize(process.env.DATABASE_URL || "localhost", {
  logging: false
});

module.exports = db;

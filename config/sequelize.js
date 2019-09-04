const dotenv = require('dotenv').config() // eslint-disable-line no-unused-vars

module.exports = {
  development: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
  }
}

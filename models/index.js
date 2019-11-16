const Sequelize = require('Sequelize')

// @todo - we need to create this folder and sequelize.js file
//   or using the module 8 slides as reference, complete this config
const allConfigs = require('../config/sequelize')

// create a connection
// @todo - using the monday-funday example for a refrence
//   or using the module 8 slides as reference, complete this connection
const connection = Sequelize()

// @todo - create the teams.js model file
// export an instance of the team model
exports.TeamModel = require('./teams')
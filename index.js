const express = require('express')
const bodyParser = require('body-parser')
const Op = require('sequelize').Op
const models = require('./models')

const app = express()

app.get('/teams', async (request, response) => {
  const teams = await models.Teams.findAll()

  response.send(teams)
})

app.get('/teams/:identifier', async (request, response) => {
  const { identifier } = request.params
  const match = await models.Teams.findOne({
    where: { [Op.or]: [{ id: identifier }, { abbreviation: identifier }] }
  })

  if (match) {
    response.send(match)
  } else {
    response.sendStatus(404)
  }
})

app.post('/teams', bodyParser.json(), async (request, response) => {
  const {
    location, mascot, abbreviation, conference, division,
  } = request.body

  if (!location || !mascot || !abbreviation || !conference || !division) {
    response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
  }

  const newTeam = await models.Teams.create({ location, mascot, abbreviation, conference, division })

  response.status(201).send(newTeam)
})

app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = app

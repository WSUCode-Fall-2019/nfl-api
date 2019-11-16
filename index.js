const express = require('express')
const bodyParser = require('body-parser')

// todo: create the teams.js
const TeamsModel = require('./models/teams')

// goal is to remove this:
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.get('/teams/:identifier', (request, response) => {
  const matches = teams.filter((team) => {
    return team.id === parseInt(request.params.identifier) || team.abbreviation === request.params.identifier
  })

  if (matches.length) {
    response.send(matches)
  } else {
    response.sendStatus(404)
  }
})

app.post('/teams', bodyParser.json(), (request, response) => {
  const {
    id, location, mascot, abbreviation, conference, division,
  } = request.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    response.status(400).send('The following fields are required: id, location, mascot, abbreviation, conference, division')
  }

  teams.push({ id, location, mascot, abbreviation, conference, division })

  response.status(201).send({ id, location, mascot, abbreviation, conference, division })
})

app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = app

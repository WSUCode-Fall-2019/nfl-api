const express = require('express')
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

app.listen(1337, () => { console.log('Listening on port 1337') })

module.exports = app

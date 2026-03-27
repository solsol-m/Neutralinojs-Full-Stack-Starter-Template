const express = require('express')
const cors = require('cors')
const { HELLO_PATH } = require('./config')

function createApp() {
  const app = express()
  app.use(cors())

  app.get('/', (_request, response) => {
    response.send(`Backend is running. Try GET ${HELLO_PATH}`)
  })

  // Keep response shape exactly the same for frontend compatibility.
  app.get(HELLO_PATH, (_request, response) => {
    response.json({ message: 'Hello from backend ' })
  })

  return app
}

module.exports = { createApp }

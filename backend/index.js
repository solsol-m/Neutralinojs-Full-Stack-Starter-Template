const { createApp } = require('./src/app')
const { SERVER_PORT } = require('./src/config')

const app = createApp()

app.listen(SERVER_PORT, () => {
  console.log(`Server running on http://localhost:${SERVER_PORT}`)
})
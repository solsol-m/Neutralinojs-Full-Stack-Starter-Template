const appConfig = require('../../shared/app.config.json')

const SERVER_PORT = appConfig.backend.port
const HELLO_PATH = appConfig.backend.helloPath

module.exports = {
  SERVER_PORT,
  HELLO_PATH,
}

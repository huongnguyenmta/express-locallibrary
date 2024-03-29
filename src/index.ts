import http from 'http'
import debug from 'debug'
import 'dotenv/config'

import app from './server'
import route from './routes'
import { AppDataSource } from './config/data-source'

// Connect DB
AppDataSource.initialize()
  .then(() => {
    console.log('Datasource has been initialized')
  })
  .catch((err) => {
    console.error('Error during Datasource initialization: ', err)
  })

app.use('', route)

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: { syscall: string; code: any }) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address() || ''
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('express-locallibrary:server')('Listening on ' + bind)
}

import express from 'express'
import { connectDB } from './app/db/connection'
import routes from './app/routes/customer'

class App {
  server: express.Express

  constructor() {
    this.server = express()
    this.middlewares()
    connectDB()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use('/api/v1', routes)
  }

}

export const server = new App().server
exports = server
import express from 'express'
import { connectDB } from './app/db/connection'

class App {
  server: express.Express

  constructor() {
    this.server = express()
    this.middlewares()
    connectDB()
  }

  middlewares() {
    this.server.use(express.json())
  }

}

export const server = new App().server
exports = server
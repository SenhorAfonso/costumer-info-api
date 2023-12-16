import express from 'express'
import connectDB from './app/db/connection'
import routes from './app/routes/customer'

class App {
  server: express.Express

  constructor() {
    this.server = express()
    this.middlewares()
    this.database()
  }

  async database() {
    await connectDB()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use('/api/v1', routes)
  }

}

export default new App().server
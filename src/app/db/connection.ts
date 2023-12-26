
import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    return mongoose.connect('mongodb://127.0.0.1:27017/customers')
      .then(() => {
        console.log('Database connected.')
      })
      .catch((error) => {
        console.log(`Error: ${error} during database connection.`)
      })
  } catch (error) {
    console.log(error)
  }
}

export default connectDB

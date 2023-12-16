import server from "./server";

const start = async(): Promise<void> => {
  try {
    await server.listen(5000, () => {
      console.log('Server is listening at 5000 port.')
    })
  } catch (error) {
    console.log(`Error: ${error} during server initialization.`)
  }
}

start()
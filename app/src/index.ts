import express from 'express'
import routes from './routes/index'

// create the app
const app = express()
const port = 5000
const host = 'localhost'

// use routes as middleWare
app.use('/api', routes)

// open the server
app.listen(port, host, (): void => {
  console.log(`server is running on: ${host} and port: ${port} `)
})

export default app

const express = require('express')
require('express-async-errors')
const cors = require('cors')
const exampleRouter = require('./controllers/example')
const { connectToDatabase } = require('./utils/db')

const startDatabase = async () => {
  await connectToDatabase()
}

app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('server/dist'))

app.use('/api/example', exampleRouter)

startDatabase()

module.exports = app
require('dotenv').config()

const PORT = process.env.PORT
const ELEPHANTSQL_URL =  process.env.ELEPHANTSQL_URL

module.exports = {
    PORT,
    ELEPHANTSQL_URL
}
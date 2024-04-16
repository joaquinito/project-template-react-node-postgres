require('dotenv').config()

const PORT = process.env.PORT
const POSTGRESQL_DB_URL =  process.env.NEON_DB_URL

module.exports = {
    PORT,
    POSTGRESQL_DB_URL
}
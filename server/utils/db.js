const { Sequelize } = require('sequelize')
const { ELEPHANTSQL_URL } = require('./config')

const sequelize = new Sequelize(ELEPHANTSQL_URL, {
  dialectOptions: {    
    ssl: {      
      require: true,      
      rejectUnauthorized: false    
    }  
  },
})

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
    return process.exit(1)
  }

  return null
}

module.exports = { connectToDatabase, sequelize }

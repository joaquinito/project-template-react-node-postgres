const Vehicle = require('./vehicle')

// Create table in the database if it doesn't exist
Vehicle.sync()

module.exports = {
  Vehicle
}
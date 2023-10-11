const exampleRouter = require('express').Router()
const { Vehicle } = require('../models')

// HTTP GET
exampleRouter.get('/', async (request, response) => {
  const vehicles = await Vehicle.findAll()
  response.json(vehicles)
})

// HTTP POST
exampleRouter.post('/', async (request, response) => {
  console.log(request.body)
  try{
    const vehicle = await Vehicle.create(request.body)
    console.log(vehicle)
    response.json(vehicle)
  }
  catch(error){
    response.status(400).json(error)
  }
})

module.exports = exampleRouter
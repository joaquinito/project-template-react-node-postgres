# Node + React + PostgreSQL template

This template contains:
* a backend (folder 'server') running on Node.js
* a frontend (folder 'client') based on the React library, started with Vite
* a PostgreSQL database hosted in the ElephantSQL cloud service

The package.json is shared by both backend and frontend.

Dependencies installed for server: `express`, `express-async-errors`, `cors`, `pg`, `sequelize` and `dotenv`

Dependencies installed for client: `axios`

Development dependencies: `nodemon`, 

## Commands

* `npm run dev:server`: run the server in development mode, using nodemon
* `npm run dev:client`: run the client in development mode
* `npm run start`: run the server in production mode (will also serve the frontend)

## Requirements

A .env file is required in the root folder, containing the following variables:
* `PORT`: the port on which the server will run
* `ELEPHANSQL_URL`: the URL for the PostgreSQL database hosted in ElephantSQL
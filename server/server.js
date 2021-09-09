const path = require('path')
const express = require('express')

const cocktailRoutes = require('./cocktail')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

//our route
server.use('/api/v1/cocktail', cocktailRoutes)

module.exports = server

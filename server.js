const express = require('express')
const hbs = require('express-handlebars')

const listRoutes = require('./routes/list')
const userRoutes = require('./routes/user')


const server = express()

// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', listRoutes)
server.use('/user', userRoutes)

module.exports = server

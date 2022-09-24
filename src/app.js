const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config({ path: path.join(__dirname, '../.env') })


const api = require('./routers')
const errorHandlers = require('./middlewares/errorHandlers')

console.log(process.env.NODE_ENV);

app.use(express.json())

app.use('/api', api)


app.use(errorHandlers.notFound)
app.use(errorHandlers.errorHandler)

module.exports = app
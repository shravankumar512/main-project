const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const cors = require('cors')
const route = require('./routes/route')
const mongoose = require('mongoose')
const config = require('./_config')
const logger = require('morgan')
const http = require('http')

const app = express()

const port = 3000

//conect to mongodb 'mongodb://127.0.0.1:27017/MainProject'
mongoose.connect(config.mongoURI[app.settings.env])
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb @ '+config.mongoURI[app.settings.env])
})
mongoose.connection.on('error',(error)=>{
    if(error)
        console.log('error while connecting to mongodb',error)
})

app.use(logger('dev'))
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.use('/api',route)

app.use(express.static(path.join(__dirname,'client/src')))

const server = http.createServer(app)

server.listen(port,()=>{
    console.log("server running at port",port)
})  

module.exports = app
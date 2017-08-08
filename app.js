const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const cors = require('cors')
const route = require('./routes/route')
const mongoose = require('mongoose')


const app = express()

const port = 3000

//conect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/MainProject')
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb @ 27017')
})
mongoose.connection.on('error',(error)=>{
    if(error)
        console.log('error while connecting to mongodb',error)
})

app.use(cors())
app.use(bodyparser.json())

app.use('/api',route)

app.use(express.static(path.join(__dirname,'client/src')))

app.get('/',(req,res)=>{
    res.send('app.js')
})

app.listen(port,()=>{
    console.log("server running at port",port)
})  
const mongoose = require('mongoose')

const UserSchame = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
})

const User = module.exports = mongoose.model('User',UserSchame)
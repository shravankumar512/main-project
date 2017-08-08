const mongoose = require('mongoose')

const ActorSchema = mongoose.Schema({
   name:{ 
        type:String, 
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    agent:{
        type:String
    },
    movies_acted:{
        type:Array,
        required:true
    }
})

const Actor = module.exports = mongoose.model('Actor',ActorSchema)
const mongoose = require('mongoose')

const DirectorSchema = mongoose.Schema({
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
    movies_directed:{
        type:Array,
        required:true
    }
})

const Director = module.exports = mongoose.model('Director',DirectorSchema)
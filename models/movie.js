const mongoose = require('mongoose')

const MovieSchema = mongoose.Schema({
    name:{ 
        type:String, 
        required:true
    },
    description:{ 
        type:String,
        required:true
    },
    year:{ 
        type:Number, 
        required:true 
    },
    rating:{
        type:Number,
        required:true
    },
    actors:{
        type:Array,
        required:true  
    },
    directors:{
        type:Array,
        required:true
    },
    movie_image:{
        type:String,
        required:true
    }
})

const Movie = module.exports = mongoose.model('Movie',MovieSchema)
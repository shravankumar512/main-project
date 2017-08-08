const express = require('express')
const router = express.Router()
const Movie = require('../models/movie')
const Actor = require('../models/actor')
const Director = require('../models/director')
const User = require('../models/user')
const mongojs =  require('mongojs')

router.post('/login',(req,res)=>{
 
    User.findOne({username:req.body.username,password:req.body.password},(err,user)=>{
        if(err){
            return res.json({msg:'error occured',isvalid:false})
        }
        if(!user){
            return res.json({msg:'Invalid user',isvalid:false})
        }
        res.json({msg:'valid user',isvalid:true})
    })
    
})

//retrieve users
router.get('/user',(req,res,next)=>{
    User.find(function(err,user){
        res.json(user)
    })
})
//delete user
router.delete('/delete/:id',(req,res,next)=>{
    User.remove({_id:req.params.id},(err,result)=>{
        if(err) res.json(err)
        else res.json(result)
    })
})

router.post('/register',(req,res)=>{
    let username = req.body.username
    let password = req.body.password

    let newuser = new User()
    newuser.username = username
    newuser.password = password
    newuser.save((err,savedUser)=>{
        if(err) {
            return res.json({msg:'something went wrong'})
        }
        res.json({msg:'user successfully add'})
    })

})

//retrieve movies
router.get('/movie',(req,res,next)=>{
    Movie.find(function(err,movies){
        res.json(movies)
    })
})

//retrieve single movie
router.get('/movie/:id',(req,res,next)=>{
    Movie.findOne({_id:mongojs.ObjectId(req.params.id)} ,function(err,movie){
        if(err) res.json(err)
        res.json(movie)
    })
})

//insert movie
router.post('/movie',(req,res,next)=>{
    let newMovie = new Movie({
        name:req.body.name,
        description:req.body.description,
        year:req.body.year,
        rating:req.body.rating,
        actors:req.body.actors,
        directors:req.body.directors,
        movie_image:req.body.movie_image
    })
    newMovie.save((err,movie)=>{
        if(err) res.json({msg:'Failed to add new movie'+err})
        else res.json({msg:'successfully movie added'})
    })
})

//update movie details
router.put('/movie/:id',(req,res,next)=>{

    Movie.findByIdAndUpdate({_id:req.params.id},req.body,(err)=>{
        if(err) res.json({msg:'Failed to update movie'+err})
        else {
            Movie.findOne({_id:req.params.id},(err,movie)=>{
                res.json(movie)
            })
        }
    })
})

//delete movie
router.delete('/movie/:id',(req,res,next)=>{
    Movie.remove({_id:req.params.id},(err,result)=>{
        if(err) res.json(err)
        else res.json(result)
    })
})



//actor operations.......

router.get('/actor',(req,res,next)=>{
    Actor.find(function(err,actors){
        res.json(actors)
    })
})

router.get('/actor/:name',(req,res,next) => {
    
    Actor.findOne({name:req.params.name}, function(err,actor){
        if(err) res.json(err)
        res.json(actor)
    })
})
router.post('/actor',(req,res,next)=>{
    let newActor = new Actor({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        agent:req.body.agent,
        movies_acted : req.body.movies_acted
    })
    newActor.save((err,actor)=>{
        if(err) res.json({msg : 'Failed to add new Actor'})
        else res.json({ msg: 'successfully actor added' })
    })
})

router.put('/actor/:id',(req,res,next)=>{

    Actor.findByIdAndUpdate({_id:req.params.id},req.body,(err)=>{
        if(err) res.json({msg:'Failed to update actor'+err})
        else {
            Actor.findOne({_id:req.params.id},(err,actor)=>{
                res.json(actor)
            })
        }
    })
})

router.delete('/actor/:id',(req,res,next)=>{
    Actor.remove({_id:req.params.id},(err,result)=>{
        if(err) res.json(err)
        else res.json(result)
    })
})


//for director .........
router.get('/director',(req,res,next)=>{
    Director.find(function(err,director){
        res.json(director)
    })
})

router.get('/director/:name',(req,res,next) => {
    Director.findOne({name:req.params.name}, function(err,director){
        if(err) res.json(err)
        res.json(director)
    })
})
router.post('/director',(req,res,next)=>{
    let newDirector = new Director({
        name:req.body.name,
        age:req.body.age,
        gender:req.body.gender,
        movies_directed : req.body.movies_directed
    })
    newDirector.save((err,director)=>{
        if(err) res.json({msg : 'Failed to add new director'})
        else res.json({ msg: 'successfully director added' })
    })
})

router.put('/director/:id',(req,res,next)=>{

    Director.findByIdAndUpdate({_id:req.params.id},req.body,(err)=>{
        if(err) res.json({msg:'Failed to update Director'+err})
        else {
            Director.findOne({_id:req.params.id},(err,director)=>{
                res.json(director)
            })
        }
    })
})

router.delete('/director/:id',(req,res,next)=>{
    Actor.remove({_id:req.params.id},(err,result)=>{
        if(err) res.json(err)
        else res.json(result)
    })
})


module.exports = router
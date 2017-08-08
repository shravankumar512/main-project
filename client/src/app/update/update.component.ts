import { MovieService, IMovieType } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  msg: any;
  result: any;
  
  t1:string

  movies:IMovieType[]
  movie:IMovieType
  name:string;
  description:string;
  year:number;
  rating:number;
  directors:string
  actors:string;
  movie_image:string;
  arr_dir:string[]
  arr_act:string[]

  imageurl:string

  hide:boolean = false;

  constructor(private movieservice:MovieService) { }

  ngOnInit() {
    this.getMoiveate()
  }

  getMoiveate(){
    this.movieservice.getMovies().subscribe(movies => this.movies = movies)
  }
  
  onUpdate(movie){
    this.hide = true
    this.movie = movie  
  }

  onUpdateMovie(){
    
    if(this.directors!==undefined){
       this.arr_dir = this.directors.split(',')
    }
    if(this.actors!==undefined){
        this.arr_act = this.actors.split(',')
    }

    const updatedMovie = {
      _id:this.movie._id,
      name:this.name,
      description : this.description,
      year:this.year,
      rating:this.rating,
      directors :this.arr_dir,
      actors : this.arr_act,
      movie_image:this.movie_image
    }
    
    this.movieservice.updateMovie(updatedMovie).subscribe(res =>{
      this.msg = res
      this.getMoiveate()
    })
  }

  onCancel(){
    this.hide = false;
  } 


  deleteMovie(id){
    console.log(id)
    this.hide = false
    if(window.confirm('do you delete the movie')){
      let movies = this.movies
      this.movieservice.deleteMovie(id)
        .subscribe(data=>{
          if(data.n==1){
            for (var i = 0; i < movies.length; i++) {
              if(movies[i]._id == id){
                movies.splice(i,1);
              }    
            }
          }
        })
    }
  }

}

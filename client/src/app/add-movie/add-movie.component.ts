import { MovieService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
})
export class AddMovieComponent implements OnInit {
  
  result: any;

  name:string;
  description:string;
  year:number;
  rating:number;
  directors:string
  actors:string;
  movie_image:string;

  constructor(private movieService:MovieService) { 
    
  }

  ngOnInit() {
    console.log('addmoive')
  }

  onSubmitMovie(){

    let arr_dir = this.directors.split(',')
    let arr_act = this.actors.split(',')
    const newMovie = {
      name:this.name,
      description : this.description,
      year:this.year,
      rating:this.rating,
      directors :arr_dir,
      actors : arr_act,
      movie_image:this.movie_image 
    }
    this.movieService.addMovie(newMovie).subscribe(res =>{
      this.result = res
      console.log(this.result)
      window.confirm('successfully movie added');
    })
  }
}

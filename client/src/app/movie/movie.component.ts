import {  Router } from '@angular/router';
import { IMovieType, MovieService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  movies:IMovieType[];
  
  constructor(private movieService:MovieService,private router:Router){}


  ngOnInit(){
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies );
  }
    onEdit(){
      console.log("on edit")
    }
    onRemove(){
      console.log("on remove")
    }
}

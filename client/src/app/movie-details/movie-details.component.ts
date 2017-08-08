import { AppBehaviourService } from './../app.behavior';
import { MovieComponent } from './../movie/movie.component';
import { IMovieType, MovieService, IActor, IDirector } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styles: []
})
export class MovieDetailsComponent implements OnInit {
  


  movie:IMovieType[] = [];

  actor:IActor[];
  director: IDirector[];
    
  isValidActor:boolean=false  
  isValidDirector: boolean=false

  Movie_id:string

  constructor(
    private activeRoute:ActivatedRoute,
    private router:Router,
    private movieService:MovieService,
    private appBeh : AppBehaviourService
  ) { }

  ngOnInit() {   
    this.Movie_id = this.activeRoute.snapshot.params['id']
    
    this.movieService.getMovieById(this.Movie_id)
        .subscribe(movie => this.movie = movie)
  }
    
  onSelectActor(actorname){
    this.movieService.getActorByName(actorname).subscribe(actor =>{      
        this.actor = actor
        if(actor){
          this.isValidActor = true
          this.isValidDirector = false
        }
  
    })
  }

  onSelectDirector(directorname){
    this.movieService.getDirectorByName(directorname).subscribe(director =>{      
        this.director = director
        
        if(director){
          this.isValidDirector = true
          this.isValidActor = false
        }
  
    })
  }


}

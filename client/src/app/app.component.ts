import { Router } from '@angular/router';
import { AppBehaviourService } from './app.behavior';
import { AuthService } from './auth.service';
import { MovieService, IMovieType } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  movies:IMovieType[];
  username:string = "shravan"
  constructor(
    private movieService:MovieService,
    private authService:AuthService,
    private logbeh:AppBehaviourService,
    private router:Router) {}
   
  isLoggedIn = this.authService.isLoggedIn

  ngOnInit(){ 
    console.log(this.isLoggedIn)
    //loginbehavioursubject...  
    this.logbeh.curLog.subscribe(bool => this.isLoggedIn = bool)
  }
    

  logout(){
      this.authService.logout();
      this.router.navigate(['/movie'])
  }

}

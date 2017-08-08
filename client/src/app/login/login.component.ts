import { AppBehaviourService } from './../app.behavior';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { MovieService } from './../app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  result: any;

  username:string;
  password:string;
  user:{username:string,password:string}
  
  constructor(
    private movieService:MovieService,
    private logbeh:AppBehaviourService,
    private router:Router,
    private authService:AuthService
  ) {
   }
  
  onLogin(){
    this.authService.Login().subscribe(()=>{
        if(this.authService.isLoggedIn){
            this.isValidUser()
        }
    })
  }

  isValidUser(){
    console.log(this.username)
    this.user = {
        username:this.username,
        password:this.password
    }
    if(this.user.username === undefined || this.user.username === null || this.user.password === undefined || this.user.password === null ){
      window.alert("please fill the details.")
    }
    else{
      if(this.user !== undefined){
        console.log(this.user)
        this.movieService.userLogin(this.user).subscribe(res => {
          this.result = res
          console.log(this.result.isvalid)
          if(this.result.isvalid) this.router.navigate(['/user']);
          else this.authService.logout()
        })
      }
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // result
  // 

  // ngOnInit() {
  // }

  // onLogin(){
  //   console.log(this.username)
  //   this.user = {
  //       username:this.username,
  //       password:this.password
  //   }
  //   console.log(this.user)

  //   this.movieService.userLogin(this.user).subscribe(res => {
  //     this.result = res

  //     console.log(this.result)

  //     this.authService.login()

  //     this.router.navigate(['/movie'])
    
  //   })
  // }
}

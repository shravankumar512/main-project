import { MovieService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string
  password:string
  conform_password:string
  result

  constructor(private movieservice:MovieService) { }

  ngOnInit() {
  }

  onSignup(){
    if(this.password===this.conform_password){
      let newUser = {
            username:this.username,
            password:this.password
        }
      if(newUser.username === undefined || newUser.password === undefined){
        alert("please fill the details.")
      }
      this.movieservice.userRegister(newUser).subscribe(res => {
        this.result = res
        console.log(this.result)
      })
    }
    else{
      console.log('passwords are not matching')
    }
  }

}

import { Router } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { AppBehaviourService } from './app.behavior';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  
    isLoggedIn = false;
    constructor(private logBeh:AppBehaviourService,private router:Router) { }
   
    Login():Observable<boolean>{
        return Observable.of(true).delay(500).do(val =>{
            this.isLoggedIn=true
            this.logBeh.changeLogin(this.isLoggedIn)
        });
        
    }

    logout():void{
        this.logBeh.changeLogin(false)
        this.isLoggedIn = false;   
    }
        
}
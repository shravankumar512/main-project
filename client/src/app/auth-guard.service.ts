import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    

    constructor(private authService:AuthService,private router:Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        console.log("canActivate...")
        return this.isLoggedIn();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log("canActivateChild...")
        return this.canActivate(childRoute,state)
    }

    isLoggedIn():boolean{
        
        if(this.authService.isLoggedIn) { return true; }

        this.router.navigate(['/login'])        
        
        return false;
    }

}
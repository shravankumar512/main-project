import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path:'', pathMatch:'full',redirectTo:'movie'},
    { path:'movie', component:MovieComponent },
    { path:'moviedetailes/:id', component:MovieDetailsComponent},
    { path:'user',component:UserComponent, loadChildren:'app/user/user.module#UserModule'},
    { path:'login', component:LoginComponent },
    { path:'signup',component:SignupComponent  }

];

export const appRouting = RouterModule.forRoot(routes);
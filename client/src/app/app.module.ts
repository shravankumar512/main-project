import { AuthGuard } from './auth-guard.service';
import { UserModule } from './user/user.module';
import { MoviePipe } from './movie/movie.pipe';
import { AuthService } from './auth.service';
import { AppBehaviourService } from './app.behavior';
import { appRouting } from './app.router';
import { HttpModule } from '@angular/http';
import { MovieService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { ActorComponent } from './actor/actor.component';
import { DirectorComponent } from './director/director.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieComponent,
    LoginComponent,
    SignupComponent,
    MoviePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting,
    FormsModule,
    UserModule
  ],
  providers: [MovieService,AppBehaviourService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

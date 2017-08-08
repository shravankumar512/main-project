import { UpdatePipe } from './../update/update.pipe';
import { DirectorComponent } from './../director/director.component';
import { ActorComponent } from './../actor/actor.component';
import { UserRouterModule } from './user.router';
import { UpdateComponent } from './../update/update.component';
import { AddMovieComponent } from './../add-movie/add-movie.component';
import { DashComponent } from './dash.component';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        CommonModule,
        UserRouterModule,
    ],
    declarations: [
        UserComponent,
        DashComponent,
        AddMovieComponent,
        UpdateComponent,
        ActorComponent,
        DirectorComponent,
        UpdatePipe
    ]
})
export class UserModule { }
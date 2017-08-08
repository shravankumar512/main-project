import { DirectorComponent } from './../director/director.component';
import { ActorComponent } from './../actor/actor.component';
import { DashComponent } from './dash.component';
import { AuthGuard } from './../auth-guard.service';
import { UpdateComponent } from './../update/update.component';
import { AddMovieComponent } from './../add-movie/add-movie.component';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const userRoutes: Routes = [
    { 
        path: 'user',
        component: UserComponent,
        canActivate:[AuthGuard],
        children:[
            {
                path:'',
                canActivateChild:[AuthGuard],
                children:[
                    { path:'add',component:AddMovieComponent },
                    { path:'actor',component:ActorComponent },
                    { path:'director',component:DirectorComponent },
                    { path:'update',component:UpdateComponent },
                    { path:'',component:DashComponent }
                ]              
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(userRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class UserRouterModule{}

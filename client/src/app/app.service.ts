import { IMovieType } from './app.service';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';


export interface IMovieType{
    _id:string;
    name:string;
    description:string;
    year:number;
    rating:number;
    directors:string;
    actors:string;
    movie_image:string;
}

export interface IActor{
    _id:string,
    name:string
    age:number
    gender:string
    agent:string
    movies_acted :Array<string>
}
export interface IDirector{
    _id:string,
    name:string
    age:number
    gender:string
    movies_directed :Array<string>
}

@Injectable()
export class MovieService {
    

    constructor(private http: Http) { }

    userLogin(userdetails){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/api/login',userdetails,{headers:headers})
            .map(res => res.json())
    }

    userRegister(newUser){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/api/register',newUser,{headers:headers})
            .map(res => res.json())
    }

    getMovies(){
        return this.http.get('http://localhost:3000/api/movie')
            .map(res => res.json())
        
    }

    getMovieById(id){
        return this.http.get('http://localhost:3000/api/movie/'+id)
            .map(res=>res.json())
    }

    addMovie(newMovie){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/api/movie',newMovie,{headers:headers})
            .map(res => res.json())
    }

    updateMovie(movie){
         let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.put('http://localhost:3000/api/movie/'+movie._id,movie,{headers:headers})
            .map(res => res.json())
    }

    deleteMovie(id){
        return this.http.delete('http://localhost:3000/api/movie/'+id)
            .map(res=>res.json())
    }


    //get actor by name..
    getActorByName(name){
        return this.http.get('http://localhost:3000/api/actor/'+name)
            .map(res => res.json())
    }

    addActor(newActor){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/api/actor',newActor,{headers:headers})
            .map(res => res.json())
    }

    //get actor by name..
    getDirectorByName(name){
        return this.http.get('http://localhost:3000/api/director/'+name)
            .map(res => res.json())
    }

    addDirector(newDirector){
        let headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post('http://localhost:3000/api/director',newDirector,{headers:headers})
            .map(res => res.json())
    }

}
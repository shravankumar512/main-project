import { MovieService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  result: any;

  name:string;
  age:number;
  gender:string;
  movies_acted:string;

  constructor(private movieService:MovieService) { 
    
  }

  ngOnInit() {
    console.log('newActor')
  }

  onSubmitActor(){

    let arr_dir = this.movies_acted.split(',')
    const newActor = {
      name:this.name,
      age : this.age,
      gender:this.gender,
      movies_acted:this.movies_acted 
    }
    this.movieService.addActor(newActor).subscribe(res =>{
      this.result = res
      console.log(this.result)
      window.confirm('successfully actor added');
    })
  }

}

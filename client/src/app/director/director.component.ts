import { MovieService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {
  result: any;

  name:string;
  age:number;
  gender:string;
  movies_directed:string;

  constructor(private movieService:MovieService) { 
    
  }

  ngOnInit() {
    console.log('addDirector')
  }

  onSubmitDirector(){

    let arr_dir = this.movies_directed.split(',')
    const newDirector = {
      name:this.name,
      age : this.age,
      gender:this.gender,
      movies_directed:this.movies_directed 
    }
    this.movieService.addDirector(newDirector).subscribe(res =>{
      this.result = res
      console.log(this.result)
      window.confirm('successfully Director added');
    })
  }

}
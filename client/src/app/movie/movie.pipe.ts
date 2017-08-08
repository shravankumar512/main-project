import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'moviePipe'
})
export class MoviePipe implements PipeTransform {

  transform(movies: any[], args: string): any {
      if (!args){
        return movies;
      } else {
        return movies
          .filter(movie => 
            movie.name.toLowerCase().includes(args.toLowerCase())
          );
      }
    }
}
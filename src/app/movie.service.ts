import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor() {}
  input : string ;
  
  getMoviesByTitle(moveTitle : string) : string{
    return "test" ;
  }
}

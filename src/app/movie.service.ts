import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMoviesByTitle(movieTitle: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      'https://www.omdbapi.com/?apikey=c6ac85b1&s=' + movieTitle
    );
  }
}

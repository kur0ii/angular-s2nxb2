import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieFullInformations, SearchResponse } from '../model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getShortInformation(movieTitle: string): Observable<SearchResponse> {
    return this.httpClient.get<SearchResponse>(
      'https://www.omdbapi.com/?apikey=c6ac85b1&s=' + movieTitle
    );
  }
  getFullInformation(id: string): Observable<MovieFullInformations> {
    return this.httpClient.get<MovieFullInformations>(
      'https://www.omdbapi.com/?apikey=c6ac85b1&i=' + id
    );
  }
}

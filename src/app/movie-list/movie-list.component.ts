import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieService: MovieService;
  response: SearchResponse;

  getFullInfo (title : string ) {
    this.movieService.getShortInformation(title).subscribe((response) => {
      this.response = response;
      console.log('--------------------------------');
      for (var val of this.response.Search) {
        console.log('response : ' + val.Title);
      }
      console.log('--------------------------------');
    });
  }
  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit() {}
}

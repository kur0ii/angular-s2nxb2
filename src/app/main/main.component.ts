import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public test: string;
  movieService: MovieService;
  response: SearchResponse;

  notifyUser(item: string): void {
    console.log('looking for : ' + item);
    this.movieService.getMoviesByTitle(item).subscribe((response) => {
      this.response = response;
    });
    console.log('response : ' + this.response.Search[0].Title);
  }

  getMoviesByTitleInServer(movieTitle: string) {}

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit() {}
}

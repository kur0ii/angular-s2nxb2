import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  movieService: MovieService;
  response: SearchResponse;

  notifyUser(item: string): void {
    console.log('looking for : ' + item);
    /*
    this.movieService.getShortInformation(item).subscribe((response) => {
      this.response = response;
      console.log('--------------------------------');
      for (var val of this.response.Search) {
        console.log('response : ' + val.Title);
      }
      console.log('--------------------------------');
    });
    */
  }

  getMoviesByTitleInServer(movieTitle: string) {}

  constructor(movieService: MovieService) {
    this.movieService = movieService;
  }

  ngOnInit() {}
}

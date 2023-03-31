import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  input: string = '';
  @Input()
  movieTitle : string ; 
  
  onEnter() {
    this.movieService
  }

  constructor() {}

  ngOnInit() {}
}

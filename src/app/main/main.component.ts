import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public test : string ;
  getMovie(movieTitle : string) : string{
    return "cherche le film " + movieTitle  ; 
  }
  constructor(userService : ) { }

  ngOnInit() {
  }

}
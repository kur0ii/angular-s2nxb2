import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public test: string;

  notifyUser(item: string): void {
    console.log(item);
  }

  getMoviesByTitleInServer(movieTitle : string){
    
  }

  constructor() {}

  ngOnInit() {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  input: string = '';
  @Output()
  newItemEvent = new EventEmitter<string>()
  
  addNewItem(value : string) {
    this.newItemEvent.emit(value)
  }
    
  onEnter() {}

  constructor() {}

  ngOnInit() {}
}

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { MovieListComponent } from './app/movie-list/movie-list.component';
import { NavbarComponent } from './app/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, NavbarComponent, MainComponent, MovieListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

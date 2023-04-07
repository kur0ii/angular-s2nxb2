import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/main/main.component';
import { NavbarComponent } from './app/navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, NavbarComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

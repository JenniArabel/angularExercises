import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
})
export class App {
  protected title = 'angular-exercises';
}

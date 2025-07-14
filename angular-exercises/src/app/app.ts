import { Component } from '@angular/core';
import { JugadoresComponent } from "./pages/jugadores/jugadores.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [JugadoresComponent],
  // imports: []
})
export class App {
  protected title = 'angular-exercises';
}

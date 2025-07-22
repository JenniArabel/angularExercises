import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../service/jugadores.service';
import type { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugadores-eliminar-mayor',
  imports: [],
  templateUrl: './jugadoresEliminarMayor.component.html',
  styleUrls: ['./jugadoresEliminarMayor.component.css']
})
export class JugadoresEliminarMayorComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    // Obtener la lista de jugadores del servicio
    // this.jugadores = this.jugadoresService.getJugadores();

    // Nos suscribimos al observable del servicio
    this.jugadoresService.jugadores$.subscribe(jugadores => {
      this.jugadores = jugadores;
    });
  }

  eliminarMayor(): void {
    /* if (this.jugadores.length === 0) {return;}

    // Encontrar el jugador con la mayor edad y eliminarlo
    const mayorEdad = Math.max(...this.jugadores.map(j => j.edad));
    const idx = this.jugadores.findIndex(j => j.edad === mayorEdad);

    // Si se encuentra un jugador con la mayor edad, eliminarlo
    if (idx !== -1) {
      this.jugadores.splice(idx, 1);
    }
    */

    this.jugadoresService.eliminarJugadorMayor();
  }
}

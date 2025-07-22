import { Component, OnInit } from '@angular/core';
import type { Jugador } from '../../interfaces/jugador.interface';
import { JugadoresService } from '../../service/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent implements OnInit {
  posicionSeleccionada: string = '';

  jugadores: Jugador[] = [];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    // Obtener la lista de jugadores del servicio
    this.jugadores = this.jugadoresService.getJugadores();
  }

  filtrarPorPosicion(event: Event) {
    this.posicionSeleccionada = (event.target as HTMLSelectElement).value;
  }
}

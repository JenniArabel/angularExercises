import { Component, input } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'jugador-list',
  templateUrl: './jugador-list.component.html',
})
export class JugadorListComponent {
  jugadores = input.required<Jugador[]>();
  listNameJugadores = input.required<string>();
}

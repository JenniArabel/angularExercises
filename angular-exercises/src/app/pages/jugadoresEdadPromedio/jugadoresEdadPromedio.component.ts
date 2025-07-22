import { Component, OnInit} from '@angular/core';
import { JugadoresService } from '../../service/jugadores.service';
import type { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugadores-edad-promedio',
  imports: [],
  templateUrl: './jugadoresEdadPromedio.component.html',
  styleUrls: ['./jugadoresEdadPromedio.component.css']
})
export class JugadoresEdadPromedioComponent implements OnInit {
  // jugadores = JugadoresService.jugadoresList();
  //usar service en los demas componentes
  jugadores: Jugador[] = [];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    // Obtener la lista de jugadores del servicio
    this.jugadores = this.jugadoresService.getJugadores();
  }

  /* Método para calcular la edad promedio de los jugadores
   Se usa reduce para sumar las edades y luego se divide por la cantidad de jugadores
   Se usa el operador + para convertir el resultado a número
   Se maneja el caso de que no haya jugadores para evitar división por cero
   Se retorna 0 si no hay jugadores
   Se usa el operador ternario para simplificar la lógica
   Se usa el método reduce para sumar las edades de los jugadores
   Se usa el método length para obtener la cantidad de jugadores
   Se usa Math.round para redondear el resultado a un número entero
  */
  get edadPromedio(): number {
    const total = this.jugadores.reduce((acc, j) => acc + j.edad, 0);
    return this.jugadores.length ? Math.round(total / this.jugadores.length) : 0;
  }

  //que cambie cuando borre el jugador mayor
}

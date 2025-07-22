import { Component, computed, signal, OnInit } from '@angular/core';
import { JugadoresService } from '../../service/jugadores.service';
import type { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugadores-filtro-nombre',
  imports: [],
  templateUrl: './jugadoresFiltroNombre.component.html',
  styleUrls: ['./jugadoresFiltroNombre.component.css']
})
export class JugadoresFiltroNombreComponent {
  jugadores: Jugador[] = [];

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit(): void {
    // Obtener la lista de jugadores del servicio
    this.jugadores = this.jugadoresService.getJugadores();
  }

  // Signal to hold the filter input value
  filtroNombre = signal('');

  // Computed property to filter players based on the input
  jugadoresFiltrados = computed(() => {
    const filtro = this.filtroNombre().trim().toLowerCase();

    if (!filtro) {
      return this.jugadores;
    }
    return this.jugadores.filter(j =>
      j.nombre.toLowerCase().startsWith(filtro) ||
      j.nombre.toLowerCase().includes(filtro)
    );
    //Agregar apellido
  });

  /* get jugadoresFiltrados() {
     const filtro = this.filtroNombre.trim().toLowerCase();

     if (!filtro) {
       return this.jugadores;
     }
      return this.jugadores.filter(j =>
       j.nombre.toLowerCase().startsWith(filtro) ||
       j.nombre.toLowerCase().includes(filtro)
     );
   }
  */

  // Method to update the filter value from input event
  actualizarFiltro(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filtroNombre.set(value);
  }
}

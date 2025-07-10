import { Jugador } from './../../interfaces/jugador.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrl: './jugadores.component.css',
})
export class JugadoresComponent {
  jugadores: Jugador[] = [
    { nombre: 'Lionel', apellido: 'Messi', edad: 36, posicion: 'DEL' },
    { nombre: 'Lautaro', apellido: 'Martinez', edad: 27, posicion: 'DEL' },
    { nombre: 'Paulo', apellido: 'Dybala', edad: 28, posicion: 'DEL' },
    { nombre: 'Ángel', apellido: 'Di María', edad: 34, posicion: 'MED' },
    { nombre: 'Nicolás', apellido: 'Otamendi', edad: 37, posicion: 'DEF' },
    { nombre: 'Marcos', apellido: 'Acuña', edad: 30, posicion: 'DEF' },
    { nombre: 'Leandro', apellido: 'Paredes', edad: 27, posicion: 'MED' },
    { nombre: 'Giovani', apellido: 'Lo Celso', edad: 26, posicion: 'MED' },
    { nombre: 'Emiliano', apellido: 'Martínez', edad: 29, posicion: 'ARQ' },
    { nombre: 'Franco', apellido: 'Armani', edad: 35, posicion: 'ARQ' },
    { nombre: 'Nicolás', apellido: 'Tagliafico', edad: 29, posicion: 'DEF' },
    { nombre: 'Guido', apellido: 'Rodríguez', edad: 27, posicion: 'MED' },
    { nombre: 'Gonzalo', apellido: 'Montiel', edad: 25, posicion: 'DEF' },
    { nombre: 'Rodrigo', apellido: 'De Paul', edad: 27, posicion: 'MED' },
    { nombre: 'Valentin', apellido: 'Barco', edad: 19, posicion: 'DEF' },
  ];

  filtroPosicion: string = '';
  nombreBuscado: string = '';

  get jugadoresFiltrados(): Jugador[] {
    return this.jugadores.filter((jugador) => {
      const posicionCoincide = this.filtroPosicion
        ? jugador.posicion === this.filtroPosicion
        : true;
      const nombreCoincide = this.nombreBuscado
        ? jugador.nombre.toLowerCase().includes(this.nombreBuscado.toLowerCase())
        : true;
      return posicionCoincide && nombreCoincide;
    });
  }

  eliminarJugador(jugador: Jugador): void {
    const masViejo = Math.max(
      ...this.jugadores.map((j) => j.edad)
    );
    const index = this.jugadores.findIndex(
      (j) => j.nombre === jugador.nombre && j.edad === masViejo
    );
    if (index !== -1) {
      this.jugadores.splice(index, 1);
    }
  }

  get edadPromedio(): number {
    if (this.jugadores.length === 0) return 0;
    const totalEdad = this.jugadores.reduce((sum, jugador) => sum + jugador.edad, 0);
    return Math.round((totalEdad / this.jugadores.length)* 100) / 100;
  }
}

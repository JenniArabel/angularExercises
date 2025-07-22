import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Jugador } from '../interfaces/jugador.interface';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  /* static jugadoresList() {
    return jugadores;
  }
  CHATGPT me dijo que si lo hacia static limitaba el metodo
  y luego por ej. no podria inyectar el servicio en un componente
  */

  // Lista de jugadores
  // Se define como un array de Jugador para cumplir con la interface
  // y evitar el uso de 'any'
  private jugadores: Jugador[] = [
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

  // Observable que mantiene el estado de los jugadores
  private jugadoresSubject = new BehaviorSubject<Jugador[]>(this.jugadores);
  jugadores$ = this.jugadoresSubject.asObservable(); //observable publico

  // Método para obtener la lista de jugadores
  // Retorna una copia del array para evitar mutaciones externas
  getJugadores(): Jugador[] {
    // Retorna una copia para proteger el array original
    return this.jugadoresSubject.value;
  }

  eliminarJugadorMayor(): void {
    const jugadores = this.getJugadores();
    if (jugadores.length === 0) return;

    const mayorEdad = Math.max(...jugadores.map((j) => j.edad));
    const nuevosJugadores = jugadores.filter((j) => j.edad !== mayorEdad);
    this.jugadoresSubject.next(nuevosJugadores); // emite los nuevos datos
  }
}
/*
Este no porque es de tipo array de any, y si tenemos una interface
Jugador, ese es el tipo del array.

const jugadores: any[] = [
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
*/

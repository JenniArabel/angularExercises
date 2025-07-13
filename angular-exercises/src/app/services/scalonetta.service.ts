import { Injectable, signal } from '@angular/core';
import { Jugador } from '../interfaces/jugador.interface';

@Injectable({
  providedIn: 'root',
})
export class EscalonetaService {
  private jugadoresData: Jugador[] = [
    { id:1 ,nombre: 'Lionel', apellido: 'Messi', edad: 36, posicion: 'DEL' },
    { id:2 ,nombre: 'Lautaro', apellido: 'Martinez', edad: 27, posicion: 'DEL' },
    { id:3 ,nombre: 'Paulo', apellido: 'Dybala', edad: 28, posicion: 'DEL' },
    { id:4 ,nombre: 'Ángel', apellido: 'Di María', edad: 34, posicion: 'MED' },
    { id:5 ,nombre: 'Nicolás', apellido: 'Otamendi', edad: 37, posicion: 'DEF' },
    { id:6 ,nombre: 'Marcos', apellido: 'Acuña', edad: 30, posicion: 'DEF' },
    { id:7 ,nombre: 'Leandro', apellido: 'Paredes', edad: 27, posicion: 'MED' },
    { id:8 ,nombre: 'Giovani', apellido: 'Lo Celso', edad: 26, posicion: 'MED' },
    { id:9 ,nombre: 'Emiliano', apellido: 'Martínez', edad: 29, posicion: 'ARQ' },
    { id:10 ,nombre: 'Franco', apellido: 'Armani', edad: 35, posicion: 'ARQ' },
    { id:11 ,nombre: 'Nicolás', apellido: 'Tagliafico', edad: 29, posicion: 'DEF' },
    { id:12 ,nombre: 'Guido', apellido: 'Rodríguez', edad: 27, posicion: 'MED' },
    { id:13 ,nombre: 'Gonzalo', apellido: 'Montiel', edad: 25, posicion: 'DEF' },
    { id:14 ,nombre: 'Rodrigo', apellido: 'De Paul', edad: 27, posicion: 'MED' },
    { id:15 ,nombre: 'Valentin', apellido: 'Barco', edad: 19, posicion: 'DEF' },
  ];
  // Datos de los jugadores en el service porque no se pueden usar inputs en el service
  // y se necesita una lista de jugadores para el componente jugador-list

  jugadores = signal<Jugador[]>(this.jugadoresData);
}

import { Component } from '@angular/core';
// import type { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css'],
})
export class JugadoresComponent {
  posicionSeleccionada: string = '';

  jugadores = [
    { "nombre": "Lionel", "apellido": "Messi", "edad": 36, "posicion": "DEL" },
    { "nombre": "Lautaro", "apellido": "Martinez", "edad": 27, "posicion": "DEL" },
    { "nombre": "Paulo", "apellido": "Dybala", "edad": 28, "posicion": "DEL" },
    { "nombre": "Ángel", "apellido": "Di María", "edad": 34, "posicion": "MED" },
    { "nombre": "Nicolás", "apellido": "Otamendi", "edad": 37, "posicion": "DEF" },
    { "nombre": "Marcos", "apellido": "Acuña", "edad": 30, "posicion": "DEF" },
    { "nombre": "Leandro", "apellido": "Paredes", "edad": 27, "posicion": "MED" },
    { "nombre": "Giovani", "apellido": "Lo Celso", "edad": 26, "posicion": "MED" },
    { "nombre": "Emiliano", "apellido": "Martínez", "edad": 29, "posicion": "ARQ" },
    { "nombre": "Franco", "apellido": "Armani", "edad": 35, "posicion": "ARQ" },
    { "nombre": "Nicolás", "apellido": "Tagliafico", "edad": 29, "posicion": "DEF" },
    { "nombre": "Guido", "apellido": "Rodríguez", "edad": 27, "posicion": "MED" },
    { "nombre": "Gonzalo", "apellido": "Montiel", "edad": 25, "posicion": "DEF" },
    { "nombre": "Rodrigo", "apellido": "De Paul", "edad": 27, "posicion": "MED" },
    { "nombre": "Valentin", "apellido": "Barco", "edad": 19, "posicion": "DEF" }
  ];

  jugadoresFiltrados = [...this.jugadores];

  filtrarPorPosicion(event: Event) {
    this.posicionSeleccionada = (event.target as HTMLSelectElement).value;
  }
}

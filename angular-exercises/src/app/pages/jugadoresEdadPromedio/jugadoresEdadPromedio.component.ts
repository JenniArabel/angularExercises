import { Component } from '@angular/core';

@Component({
  selector: 'app-jugadores-edad-promedio',
  imports: [],
  templateUrl: './jugadoresEdadPromedio.component.html',
  styleUrls: ['./jugadoresEdadPromedio.component.css']
})
export class JugadoresEdadPromedioComponent {
  jugadores = [
    { nombre: "Lionel", apellido: "Messi", edad: 36, posicion: "DEL" },
    { nombre: "Lautaro", apellido: "Martinez", edad: 27, posicion: "DEL" },
    { nombre: "Paulo", apellido: "Dybala", edad: 28, posicion: "DEL" },
    { nombre: "Ángel", apellido: "Di María", edad: 34, posicion: "MED" },
    { nombre: "Nicolás", apellido: "Otamendi", edad: 37, posicion: "DEF" },
    { nombre: "Marcos", apellido: "Acuña", edad: 30, posicion: "DEF" },
    { nombre: "Leandro", apellido: "Paredes", edad: 27, posicion: "MED" },
    { nombre: "Giovani", apellido: "Lo Celso", edad: 26, posicion: "MED" },
    { nombre: "Emiliano", apellido: "Martínez", edad: 29, posicion: "ARQ" },
    { nombre: "Franco", apellido: "Armani", edad: 35, posicion: "ARQ" },
    { nombre: "Nicolás", apellido: "Tagliafico", edad: 29, posicion: "DEF" },
    { nombre: "Guido", apellido: "Rodríguez", edad: 27, posicion: "MED" },
    { nombre: "Gonzalo", apellido: "Montiel", edad: 25, posicion: "DEF" },
    { nombre: "Rodrigo", apellido: "De Paul", edad: 27, posicion: "MED" },
    { nombre: "Valentin", apellido: "Barco", edad: 19, posicion: "DEF" }
  ];

  // Método para calcular la edad promedio de los jugadores
  // Se usa reduce para sumar las edades y luego se divide por la cantidad de jugadores
  // Se usa el operador + para convertir el resultado a número
  // Se maneja el caso de que no haya jugadores para evitar división por cero
  // Se retorna 0 si no hay jugadores
  // Se usa el operador ternario para simplificar la lógica
  // Se usa el método reduce para sumar las edades de los jugadores
  // Se usa el método length para obtener la cantidad de jugadores
  // Se usa Math.round para redondear el resultado a un número entero
  get edadPromedio(): number {
    const total = this.jugadores.reduce((acc, j) => acc + j.edad, 0);
    return this.jugadores.length ? Math.round(total / this.jugadores.length) : 0;
  }
}

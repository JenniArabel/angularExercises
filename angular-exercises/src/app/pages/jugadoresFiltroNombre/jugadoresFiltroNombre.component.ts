import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-jugadores-filtro-nombre',
  imports: [],
  templateUrl: './jugadoresFiltroNombre.component.html',
  styleUrls: ['./jugadoresFiltroNombre.component.css']
})
export class JugadoresFiltroNombreComponent {
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

  // get jugadoresFiltrados() {
  //   const filtro = this.filtroNombre.trim().toLowerCase();

  //   if (!filtro) {
  //     return this.jugadores;
  //   }
  //   return this.jugadores.filter(j =>
  //     j.nombre.toLowerCase().startsWith(filtro) ||
  //     j.nombre.toLowerCase().includes(filtro)
  //   );
  // }


  // Method to update the filter value from input event
  actualizarFiltro(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filtroNombre.set(value);
  }
}

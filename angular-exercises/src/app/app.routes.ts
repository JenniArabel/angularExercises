import { JugadoresEliminarMayorComponent } from './pages/jugadoresEliminarMayor/jugadoresEliminarMayor.component';
import { Routes } from '@angular/router';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadoresFiltroNombreComponent } from './pages/jugadoresFiltroNombre/jugadoresFiltroNombre.component';
import { JugadoresEdadPromedioComponent } from './pages/jugadoresEdadPromedio/jugadoresEdadPromedio.component';

export const routes: Routes = [
  {
    path: '',
    component: JugadoresComponent,
  },
  {
    path: 'filtro-nombre',
    component: JugadoresFiltroNombreComponent,
  },
  {
    path: 'jugador-eliminar-mayor',
    component: JugadoresEliminarMayorComponent,
  },
  {
    path: 'jugadores-edad-promedio',
    component: JugadoresEdadPromedioComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

import { JugadoresEliminarMayorComponent } from './pages/jugadoresEliminarMayor/jugadoresEliminarMayor.component';
import { Routes } from '@angular/router';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { JugadoresFiltroNombreComponent } from './pages/jugadoresFiltroNombre/jugadoresFiltroNombre.component';

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
    path: '**',
    redirectTo: '',
  },
];

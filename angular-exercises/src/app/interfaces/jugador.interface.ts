export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  posicion: 'ARQ' | 'DEF' | 'MED' | 'DEL';
}

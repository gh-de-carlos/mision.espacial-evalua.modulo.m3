import { mision } from './mision.js';
import { agregarTripulante } from './tripulacion.js';

// FASE 2
function prepararMision(mision = {}) {
  generarTripulacion(mision);
  // TODO cargarRecursos(mision);
  // TODO generarEntorno(mision);
}

function generarTripulacion(mision) {
  agregarTripulante(mision, 'c', 0);
  agregarTripulante(mision, 't', 0);
}

// FASE 3

// init()
prepararMision(mision);
console.log(mision);
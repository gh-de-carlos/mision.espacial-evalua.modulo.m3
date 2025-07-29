export const mision = {
  nombre: '',                 // String - elegida al azar
  destino: '',                // String - galaxias al azar
  distanciaEstimada: 0,       // Number
  distanciaActual: 0,         // Number
  estadoMision: true,         // ¿QUÉ?
  nave: {
    nombre: '',               // nombre de la nave
    modelo: '',               // modelo de la nave
    tripulacion: []           // tripulacion de la nave
  },
  recursosDisponibles: {
    agua: 0,
    comida: 0,
    energia: 0
  },
  mostrarEstado: function () {
    const estado = `
    La misión ${this.nombre} a cargo de la ${this.nave.nombre}
    está a ${this.distanciaActual} años luz de ${this.destino}
    Los recursos disponibles son:
    - Energía protónica: ${this.recursosDisponibles.energia}.
    - Comida           : ${this.recursosDisponibles.comida}.
    - Agua             : ${this.recursosDisponibles.agua}
    Actualmente, la misión ${this.estadoMision ? ' aun ' : ' ya no'} se puede lograr.
    `
    alert(estado);
  },
  reportarRecursos: function () {
    const recursos = `
    Los recursos disponibles son:
    - Energía protónica: ${this.recursosDisponibles.energia}.
    - Comida           : ${this.recursosDisponibles.comida}.
    - Agua             : ${this.recursosDisponibles.agua}
    `
    alert(recursos);
  },
}
// 🌟 Capitanes: Pioneers of tech & melancholic masters of prose
const capitanes = {
  "Knuth": {
    name: "Knuth",
    salud: 99,
    comida: 12,
    agua: 11,
    experiencia: 0.93
  },
  "Von Neumann": {
    name: "Von Neumann",
    salud: 92,
    comida: 13,
    agua: 14,
    experiencia: 0.88
  },
  "Sylvia Plath": {
    name: "Sylvia Plath",
    salud: 94,
    comida: 14,
    agua: 12,
    experiencia: 0.85
  },
  "Turing": {
    name: "Turing",
    salud: 97,
    comida: 11,
    agua: 13,
    experiencia: 0.91
  },
  "Raymond Carver": {
    name: "Raymond Carver",
    salud: 90,
    comida: 15,
    agua: 10,
    experiencia: 0.86
  }
};

// 👥 Tripulantes: Gothic scribes & system dreamers
const tripulantes = {
  "Lovelace": {
    name: "Lovelace",
    salud: 82,
    comida: 9,
    agua: 9,
    experiencia: 0.60
  },
  "Edgar Allan Poe": {
    name: "Edgar Allan Poe",
    salud: 65,
    comida: 6,
    agua: 6,
    experiencia: 0.50
  },
  "Kernighan": {
    name: "Kernighan",
    salud: 84,
    comida: 10,
    agua: 7,
    experiencia: 0.63
  },
  "Emily Dickinson": {
    name: "Emily Dickinson",
    salud: 77,
    comida: 7,
    agua: 5,
    experiencia: 0.42
  },
  "Ritchie": {
    name: "Ritchie",
    salud: 89,
    comida: 8,
    agua: 10,
    experiencia: 0.65
  },
  "Herman Melville": {
    name: "Herman Melville",
    salud: 76,
    comida: 6,
    agua: 8,
    experiencia: 0.48
  },
  "Linus": {
    name: "Linus",
    salud: 93,
    comida: 10,
    agua: 9,
    experiencia: 0.66
  },
  "Flannery O'Connor": {
    name: "Flannery O'Connor",
    salud: 70,
    comida: 7,
    agua: 7,
    experiencia: 0.40
  },
  "Donald Hall": {
    name: "Donald Hall",
    salud: 81,
    comida: 6,
    agua: 5,
    experiencia: 0.51
  },
  "Brooks": {
    name: "Brooks",
    salud: 88,
    comida: 9,
    agua: 9,
    experiencia: 0.58
  },
  "Rowling": {
    name: "Rowling",
    salud: 69,
    comida: 5,
    agua: 7,
    experiencia: 0.33
  },
  "Kate Chopin": {
    name: "Kate Chopin",
    salud: 73,
    comida: 7,
    agua: 8,
    experiencia: 0.36
  },
  "Grace Hopper": {
    name: "Grace Hopper",
    salud: 91,
    comida: 10,
    agua: 8,
    experiencia: 0.67
  },
  "Nathaniel Hawthorne": {
    name: "Nathaniel Hawthorne",
    salud: 75,
    comida: 6,
    agua: 6,
    experiencia: 0.45
  },
  "Margaret Hamilton": {
    name: "Margaret Hamilton",
    salud: 87,
    comida: 9,
    agua: 9,
    experiencia: 0.54
  }
};

// esta función permite al usuario asignar voluntariamente un
// tripulante extra (o más) a su misión pero castiga el consumo
// de uno de sus recursos y la vida inicial.
function agregarTripulante(mision, rol, castigo = Math.round(Math.random() * 5) + 5) {
  const list = Object.keys((rol === 'c' ? capitanes : tripulantes));
  const len = list.length;
  // cuantos tripulantes iniciales
  const HOW_MANY = rol === 'c' ? 1 : 5;

  const team = new Set();
  do {
    team.add(list[Math.floor(Math.random() * len)]);
  } while (team.size < HOW_MANY);
  
  team.forEach(member => {
    const who = rol === 'c' ? capitanes[member] 
                            : tripulantes[member];
    who.comida += castigo;
    who.agua += castigo;
    who.salud -= castigo;
    mision.nave.tripulacion.push(who);
  })
  console.log(list, mision)
}

export { agregarTripulante };
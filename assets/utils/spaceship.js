const spaceship = [
  "\x1b[37m           /\\           \x1b[0m",
  "\x1b[37m          |==|          \x1b[0m",
  "\x1b[37m          |  |          \x1b[0m",
  "\x1b[36m         /====\\         \x1b[0m",
  "\x1b[36m        |======|        \x1b[0m",
  "\x1b[34m       /________\\       \x1b[0m",
  "\x1b[33m       |  __  __ |       \x1b[0m",
  "\x1b[33m       | |  ||  ||       \x1b[0m",
  "\x1b[33m       | |__||__||       \x1b[0m",
  "\x1b[33m       |  __  __ |       \x1b[0m",
  "\x1b[33m       | |  ||  ||       \x1b[0m",
  "\x1b[33m       | |__||__||       \x1b[0m",
  "\x1b[32m       |  ____  |        \x1b[0m",
  "\x1b[32m       | |    | |        \x1b[0m",
  "\x1b[32m      /| |____| |\\      \x1b[0m",
  "\x1b[32m     /_|________|_\\     \x1b[0m",
  "\x1b[31m     |||||||||||||||     \x1b[0m",
  "\x1b[31m     |##############|     \x1b[0m",
  "\x1b[31m     |##############|     \x1b[0m",
  "\x1b[31m     |##|######|##|#|     \x1b[0m",
  "\x1b[31m     |##|######|##|#|     \x1b[0m",
  "\x1b[31m     |##|######|##|#|     \x1b[0m",
  "\x1b[5m\x1b[31m     '==============‘     \x1b[0m"
];

const frameRate = 50;        
function launchSpaceship(frames = frameRate) {
  // position almacena la cantidad actual de filas
  // en la ventana de la terminal, frameRate está 
  // ahí para evitar los números mágicos, establece
  // el intervalo de milisegs. con el que se ejecutará
  let rows = process.stdout.rows;
  let position = rows - spaceship.length;
  const terminalBound = -position;

  // ANSI escape: limpia y resetea el cursor de la terminal
  const clearScreen = () => process.stdout.write('\x1Bc');

  // dibuja un frame: offset de lineas limpias + nave
  const drawSpaceship = (topOffset) => {
    // limpia y resetea
    clearScreen();
    // crea el padding vertical mientras es necesario
    for (let i = 0; i < topOffset; i++) {
      console.log("");
    }

    // si topOffset < 0: comenzar a cortar nave
    if (topOffset < 0) spaceship.shift();
    spaceship.forEach(line => console.log(line));
  };

  // orquestador: 
  const interval = setInterval(() => {
    drawSpaceship(position);
    position--;
    // funciona perfect pero necesito que la nave salga de 
    // la pantalla y se pierda en el espacio
    if (position + spaceship.length < terminalBound || 0) {
      clearInterval(interval);
      clearScreen();
      console.log("🚀 Brrrruuummm!\n");
    }
  }, frameRate);
}
module.exports = { launchSpaceship };
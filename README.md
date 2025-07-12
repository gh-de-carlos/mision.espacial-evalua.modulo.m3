# <img src="favicon.png" style="width:25; border-radius: 50%"/> Módulo 3 - Evaluación - "Misión galáctica" <img src="favicon.png" style="width:25; border-radius: 50%"/>

![mockup o entrega del ejercicio][0]


## 🚀 OBJETIVO

### Objetivo general

Desarrollar un simulador interactivo por código JavaScript que permita simular una misión de exploración galáctica. El sistema debe administrar tripulantes, recursos, decisiones lógicas y registros de datos utilizando variables, estructuras de control, funciones, objetos y arreglos. El alumno debe entregar un archivo `.js` que contenga todo el código necesario para ejecutar esta simulación desde Node.js o desde un entorno online como repl.it o JSFiddle.

### Descripción del reto

Construir un programa que simule una misión de exploración galáctica. El usuario podrá asignar datos de misión, registrar tripulantes, gestionar recursos, tomar decisiones, y consultar reportes mediante interacciones por consola (usando `console.log()` y `prompt()` si desea).


## 👉 REQUISITOS

**FASES DE DESARROLLO**

### Fase 1: Configuración de misión
* Declarar variables para el nombre de la `nave` (tipo string), `distanciaEstimada` (number), `estadoMisión` (boolean) y `recursosDisponibles` (objeto con propiedades como agua, comida y energía).
* Crear un objeto `nave` que contenga las propiedades generales de la misión: nombre, modelo, tripulación (como un arreglo vacío), y estado de la misión.
* Incluir métodos dentro del objeto como `mostrarEstado()` y `reportarRecursos()` para imprimir mensajes por consola.
* Utilizar el objeto `Math` para generar cantidades aleatorias de recursos iniciales.

### Fase 2: Registro de tripulantes
* Crear una función para registrar tripulantes en un arreglo llamado `tripulacion`, cada uno representado por un objeto con nombre, rol y nivel de salud (de 0 a 100).
* Crear funciones auxiliares corno agregar `tripulante(nombre, rol)` y `mostrarTripulacion()` que permitan administrar la tripulación.

### Fase 3: Simulación de eventos
* Simular un menú de opciones con una variable opcion y estructuras condicionales `if` o `switch` para ejecutar distintas acciones:
    * Explorar (reduce recursos y puede afectar salud)
    * Comer (reduce comida, mejora salud)
    * Descansar (recupera salud, consume tiempo)
    * Reportar estado (muestra un resumen de variables)
* Usar ciclos como `while` o `for` para representar dias o turnos de la misión. Cada turno debe modificar los recursos y aplicar lógica condicional.
* Implementar condiciones de borde como evitar que los recursos bajen de 00 que la salud supere 100.

### Fase 4: Reportes y lógica avanzada
* Crear funciones que muestren:
    * El promedio de salud de la tripulación
    * La cantidad de tripulantes con salud menor a 50
    * El estado de los recursos
* Usar ciclos, acumuladores y operadores para realizar estos cálculos.
* Emplear concatenación de strings y métodos del objeto String para mejorar los mensajes por consola.

### Fase 5: Código limpio y buenas prácticas
* El código debe estar dividido en funciones con responsabilidades claras.
* Las variables deben tener nombres significativos.
* Se deben seguir las convenciones del lenguaje y evitar el uso innecesario de variables globales.
* Comentar el código donde sea necesario para describir partes importantes del programa.

### Entregable
* Un archivo llamado `simuladorMision.js` que contenga todo el código comentado y organizado.
* El código debe poder ejecutarse sin errores desde un entorno de JavaScript puro, sin depender de HTML.

## 👀 NOTAS

- Joe Pino...

## 📁 ESTRUCTURA DEL PROYECTO
```
📁 esta-carpeta/  
├── index.html  
├── favicon.png  
├── README.md  
└── 📁assets/  
    ├── 📁css/  
    │   └── style.css  
    ├── 📁img/  
    ├── 📁js/  
    │   └── main.js
    └── 📁utils/  
        ├── mockuppng
        └── blablah
```

## 📖 DOCUMENTACIÓN CONSULTADA
* [][2]
* [][3]
* [][4]
* [][5]

## 🧰 UTILIDADES

* [][6]

<!-- Enlaces referenciados arriba -->
[0]:./assets/utils/mockup.png
[1]:
[2]:
[3]:
[4]:
[5]:
[6]:


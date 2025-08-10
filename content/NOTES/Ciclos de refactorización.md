---
curso: "[[Refactoring sostenible]]"
bloque: 5. Fundamentos de refactoring
orden: "5.2"
tags:
  - Refactoring
  - Buena-Práctica
num_veces_leida: 0
---
## ¿Qué son?

Son momentos donde podemos introducir la práctica de la refactorización dentro de un ciclo de trabajo. En este caso, hablamos de una introducción que cuyo consumo de tiempo sea muy bajo pero que tiene una gran rentabilidad a largo plazo. Esto permite que el mayor tiempo se dedique a funcionalidades nuevas  y no al contrario, si no se hace ocurriría lo contrario.

Ejemplos de esto son:
* Conforme se termina de escribir un bloque y funciona, podemos volver a leerlo buscando si se puede hacer más explicito
* Cada día al empezar la jornada dedica diez minutos a leer el código del día anterior
* Al terminar una funcionalidad repasa el código para identificar posibles sorpresas o mejorar.

> Regla del Boy Scout: Mejorar algo el código cuando se tiene que cambiar el código. Mejora continúa
## Cosas a tener en cuenta

* Cuanto más tiempo pase más perspectiva podemos tener para identificar mejoras, pero si pasa mucho tiempo podemos perder el conocimiento necesario para entender el código, el contexto y el por qué
* Por lo general, lo mejor es hacer esto en pair-programming, pero si no es así, es bueno hacer una sesión de code review para repasar el código en conjunto. De manera, que si hay necesidad de explicar el código, quizás no está siendo lo suficientemente explicativo el código. Lo mismo ocurre, si la persona que no escribió lee y no entiende, sus preguntas permiten mejorar el código.



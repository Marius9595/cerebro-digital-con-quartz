---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 182-
tags:
  - TDD
  - Testing
  - Patrón
---
## ¿Qué es?
Es un patrón que sirve de solución para poder testear código que se reconoce cómo no testeable en la práctica (que una video cámara funciona, cierta comunicaciones de red...). De esta manera, el objetivo es "humillar" ese código haciendolo demasiado simple para molestarse en probarlo.

Lo que plantea el patrón es el siguiente: 

El código que se comunica a través del límite se separa en dos elementos: El presentador y el objeto Humble. Su comunicación, entre estos dos, se realiza vía una estructura de datos.

TODO:

parace que es la aplicación de puertos y adaptadores y así la interfaz en los casos de uso es más fácil de testear, pero hay que echarle otro ojo porque no se entiende muy bien la abstracción que se usa para explicarlo
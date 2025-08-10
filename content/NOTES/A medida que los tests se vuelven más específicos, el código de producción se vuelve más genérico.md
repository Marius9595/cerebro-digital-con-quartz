---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 208-
tags:
  - TDD
  - Testing
  - Heurística
num_veces_leida: 1
---
>As the tests get more specific, the code gets more generic. 

La divergencia evolutiva significa que las formas de los dos serán notablemente diferentes. 

Los test se convertirán en una lista lineal de restricciones y especificaciones. 

El código de producción, por otro lado, se convertirá en una rica familia de lógica y comportamiento organizados para abordar la abstracción subyacente que impulsa la aplicación. 

Este estilo divergente desacopla aún más las pruebas del código de producción, protegiendo a las dos de los cambios en la otra.Si bien es cierto que el [[Acoplamiento]] nunca podrá ser completamente roto. Habrá cambios en un elemento que forzará cambios en otro/s. El objetivo no es eliminar este efecto del todo, sino minimizarlo.


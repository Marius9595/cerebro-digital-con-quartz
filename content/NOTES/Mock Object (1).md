---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: 149-151
tags:
  - TDD
  - Dobles-de-Test
  - Testing
  - Definición
---
## ¿Qué es?
Según la [[Jerarquía de los tipos de doble de test]], un mock es un [[Spy test double]]. Sin embargo, un mock además tiene expectativas que si cumplen hará pasar los tests y sino provocará los fallos. Esto es lo mismo que decir que las aserciones del test están dentro del test. Esto hace que puedan ser bastante complejos.

## Opinión del autor
Estos objetos acoplan a un [[Spy test double]] con las aserciones de los tests dejando menos claro que se está testeando o al menos da un halo de oscurantismo 
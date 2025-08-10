---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 186-
tags:
  - Heurística
  - TDD
  - Testing
---

>Decouple the structure of your tests from the structure of the production code. 

## ¿Por qué?
Esto se debe es porque vuelve frágiles a los test antes cambios de diseño del código de producción por medio de refactoring.

Normalmente se piensa "Deberían estar acoplados porque verifican el código de producción" pero no necesariamente se necesita eso para cumplir la verificación.

## Cómo el autor cumple esto
Creación de interfaces de las capas, estos ponen en evidencia el comportamiento del sistema, no el conjunto de elementos detras de esta. Estos elementos quedan testeados de forma indirecta.



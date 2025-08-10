---
libro: "[[Growing Object-Oriented Software, Guided by tests]]"
capítulo: 1-What is the point of test-driven-development
paginas: 8,
tags:
  - TDD
aliases:
  - Test solitario
---
## ¿Qué es?

Según los autores son tests que ayudan a cuidar la [[Calidad interna del código]]. Suelen hablar de test sobre objetos, no queda del todo claro, pero de cierta manera hablan de test solitario. Esto significa que se intenta verificar que un objeto haga o cumpla lo que se espera de este. Dado, que los objetos no son entes aislados y normalmente trabajan con otros por colaboración, y dicha colaboración se traduce en dependencia, para testear que un objeto funciona correctamente, es necesario simular estas dependencias, y lo más importante, que queden explicitas en el diseño. Por tanto, se trata de comprobar que un objeto, estableciendo condiciones de sus dependencias, se comporte de una manera concreta ante un escenario x.

## Opinión
Este enfoque de test unitario provoca:
* Un acoplamiento excesivo de los tests en el diseño
* Tener que realizar mucho testing de caja blanca
* Y dificultar el cambio de diseño
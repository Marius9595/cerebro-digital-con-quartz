---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: 145-148
tags:
  - TDD
  - Testing
  - Dobles-de-Test
  - Definición
num_veces_leida: 1
---
## ¿Qué es?

Acorde a la [[Jerarquía de los tipos de doble de test]], un spy es un [[Stub (1)]]. Sin embargo, este además tiene memoria sobre que fue realizado y puede ser preguntado por ello. Para ello, se establece un lógica que puede ser tan simple como gestionar un simple booleano (si un método ha sido llamado) o puede ser tan complejo por que mantiene un historial de cada llamada y paso de argumento.

## Opinión el autor
Los spies son útiles para asegurar de que el algoritmo que está siendo testeado se comporta como se espera. Pero por otro lado, son peligrosos porque acoplan los tests a la implementación.-

>A spy can be as simple as a single Boolean that is set when a particular  method is called. Or a spy can be a relatively complex object that maintains  a history of every call and every argument passed to every call.  Spies are useful as a way to ensure that the algorithm being tested behaves  correctly. Spies are dangerous because they couple the tests to the  implementation of the function being tested.


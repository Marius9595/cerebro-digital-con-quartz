---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 210-221
tags:
  - TDD
  - Enfoque
  - Heurística
aliases:
  - Transformation Priority Premise
  - TPP
---

Al practicar [[TDD]] se nos presentan bifurcaciones en el camino. Cada camino implica una transformación diferente para pasar el test. Pero ¿Cúal deberíamos elegir? ¿Cúal es la mejor?

## Respuesta del autor
El autor en este caso presenta una solución que bajo su experiencia y creencia cree que funciona: TPP que consiste en la siguiente lista transformaciones:

* {} (No Code) -> Null
* Null -> Constante
* Constante -> Variable
* Incondicional -> Condicional
* Value -> Lista
* Condicional -> Iteración (While)
* Declaración (para una variable) -> Recursividad
* Value -> Mutación de valor

El autor enfatiza que es un orden natural y estricto




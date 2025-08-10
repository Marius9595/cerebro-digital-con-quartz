---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: "142"
tags:
  - TDD
  - Dobles-de-Test
  - Testing
  - Definición
num_veces_leida: 1
---
## ¿Qué es?
Un objeto Dummy es una implementación que no hace nada. 

Cada método de la interfaz que es implementado por este:
1) no hace nada. 
2) Si el método tiene que retornar un valor, este de ser lo más parecido a algo neutro o vacío como null o cero

Su propósito es pasar un objeto cómo argumento requerido para testear, pero ni va a intervenir o tener relevancia en la lógica que se va a verificar en el test. Por tanto, solo sirve para permitir la compilación del código en el test.

## Valoración del autor sobre su uso
1. Si ocurre que un elemento toma un objeto y no "lo usa" es mejor buscar la manera de eliminar esta incongruencia y no mantenerla.
2. El evidente problema de cadena de dependencias que suscita esto

## ¿Cuándo usarlo?
Cuando es inevitable y se quiere cumplir la heurística:

> [[No incluyas cosas en tus tests que tu test no necesita]]

Debido a que el objeto original  necesita una construcción muy pesada que no será usada


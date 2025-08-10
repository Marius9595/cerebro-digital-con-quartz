---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: 183-185
tags:
---
## ¿Qué es?

Se trata una técnica que se puede aplicar junto a una de las [[Estrategias para crear identificadores de las entidades]] de manera que:

* No haya conflictos con el sistema de relaciones de un ORM
* Mejorar la eficiencia entre las relaciones de colecciones o tablas cuando la identidad definida en dominio no es eficiente para esta tarea

La aplicación consiste en crear una identidad alternativa  que será  usada por el sistema de persistencia (un atributo adicional de tipo int o long que mantenga la restricción de ser único). Esta identidad deberá permanecer oculta al mundo exterior, solo la identidad definida en domino es la que será expuesta  
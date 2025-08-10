---
curso: "[[Refactoring sostenible]]"
bloque: 6. Estrategias de Refactoring
orden: "6.3"
tags:
  - Refactoring
  - Estrategia
num_veces_leida: 0
aliases:
  - Cambio paralelo
  - Expandir-contraer
---
## ¿Qué es?

Propuesta por [[Joshua Kerievsky]] en su libro [[Refactoring to patterns]]

Es una técnica que se aplica para  [[Refactorizar]] o aplicar cambios más complejos donde no podemos no basta con aplicar uno o varios [[Refactoring automático]]s sin que se rompan los tests.

Esta técnica se usa para implementar cambios incompatibles hacia atrás de manera segura (sin romper tests)

Consta de tres fases: 
1) Expandir: 
Creación de una nueva API (que vive en paralelo). Los nuevos clientes que necesitan esta la podrán empezar a consumir y no rompemos los otros que aún no la necesitan
1) Migrar 
Enlazamos los antiguos y nuevos clientes a la Nueva API llamando desde el viejo al NUEVO (que contiene la funcionalidad ya existente más la nueva)
1) Contraer
Eliminar el viejo pues ya es irrelevante. Se puede hacer por medio de un inline o haciendo renames.

![[Parallel-Change.png]]

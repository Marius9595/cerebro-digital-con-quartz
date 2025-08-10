---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "0.00"
minutoFin: "2.40"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

* El código IO no forma parte del dominio. Además, cuando se entremezclan dificulta la comprensión de la lógica de negocio.
* El código IO es no determinista, pueden ocurrir diferentes resultados con los mismos inputs, lo que dificulta el testing.
* El código IO puede fallar, lo que hace que haya que hacer un manejo de excepciones, que es diferente al de errores.

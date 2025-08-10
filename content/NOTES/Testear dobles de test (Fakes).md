---
libro: "[[Practical Object-Oriented Desing (2º Edition)]]"
capítulo: 9-Designing Cost-Effective Tests
paginas: 245-257
tags:
  - Roles-Objetos
  - Testing
  - Dobles-de-Test
  - Diseño-software
---
## ¿Por qué?
[[Sandy Metz]] se encontraba con que
> [[Inyección de una dependencia real (usada en producción) vs un doble de tests]] 

Sin embargo, evitar los dobles de tests haría que fuera dificil mejorar los tests. Por ello propone testarlos bajo un rol o un [[Duck Type]] y por tanto que sean compartidos los tests de manera que no suponga un coste o se vuelvan obseletos. De esta manera, no hay que caer en una Elección
---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: "58"
tags:
  - TDD
---
Las tres leyes o arbitrariedades de la [[Disciplina]] [[Test-Driven-Development]] son:

>1. Write no production code until you have first written a test that fails due to the lack of that  production code. 

>2. Write no more of a test than is sufficient to fail or fail to compile. Resolve the failure by writing  some production code.

>3. Write no more production code than will resolve the currently failing test. Once the test passes,  write more test code. 

Las tres leyes te encierran en un ciclo de unos pocos segundos de duración.  En cada vuelta de ese ciclo, estás cambiando entre código de prueba y código de producción. Nunca podrás escribir simplemente una sentencia if o un bucle while. Nunca podrás simplemente escribir una función. Estarás atrapado para siempre en este pequeño bucle de cambiar contextos entre código de prueba y código de producción. 


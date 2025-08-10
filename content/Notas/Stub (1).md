---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: 143-145
tags:
  - TDD
  - Dobles-de-Test
  - Testing
  - Definición
---
## ¿Qué es?

De acuerdo a la [[Jerarquía de los tipos de doble de test]] es un [[Dummy Object]] pues no hace nada. Sin embargo, en lugar de retornar un valor neutro, retorna valores que permiten dirigir el curso de la verificación en el test hacia camino deseados/necesitados para evaluar que una funcionalidad se cumple. Por tanto, los stubs devuelven/retornan valores de prueba específicos con el fin de dirigir al sistema bajo test en los caminos de comprobación del test.
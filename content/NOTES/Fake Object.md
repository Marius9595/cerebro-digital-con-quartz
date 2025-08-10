---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: "151"
tags:
  - TDD
  - Dobles-de-Test
  - Testing
  - Definición
num_veces_leida: 1
---
## ¿Qué es?

Un fake object según la [[Jerarquía de los tipos de doble de test]], es un doble de test singular. Esto se debe que estos actúan como simuladores. Esto significa que es un objeto que implementa, de forma rudimentaria,  las funcionalidades del objeto que intentan suplantar. 

## Opinión del autor
El problema de los fakes es que a medida que la aplicación crece, más condiciones de tests habrá. En consecuencia, los fakes tenderán también a crecer. Eventualmente, necesitarán tests para poder estar seguros de que funcionan. Es por esto que raramente los tiene en consideración para evitar esta desconfianza por no testearlos y no quiere tener que hacerlo

## Mi opinión
Creo que la preocupación se solventa gratis si hace testing sobre la abstracción o [[Duck Type]], como por ejemplo el repository y su misión no es poca como para querer tratarlo como implementación intercambiable. Pues da una aceleración y simplicidad en los tests de alta granularidad.
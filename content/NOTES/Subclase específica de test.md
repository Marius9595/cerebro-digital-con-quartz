---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 180-181
tags:
  - TDD
  - Testing
  - Patrón
---
## ¿Qué es?
Es un patrón utilizado en Testing  para:
- Tener un mecanismo de seguridad 
- Por conveniencia y rendimiento. 

Para ello se sobreescriben esas operaciones sobre las que se quiere actuar de manera. 

Incluso se puede llegar a crear métodos con el único propósito de aislar cierto proceso que no nos interesa en el test.

## Mi opinión
También sirve para aislar cierta utilidad que demanda el tests pero que no es necesario para la funcionalidad de la aplicación actual. Si llegara el caso de que si tiene cabida, con un Pull Member Up se puede gestionar ya a nivel de código de producción
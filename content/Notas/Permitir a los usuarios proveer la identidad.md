---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: "173"
tags:
  - DDD
---
## ¿Cómo es?

Esta es una de las [[Estrategias para crear identificadores de las entidades]] donde el usuario es quién debe aportar un valor único como input de la aplicación para crear una entidad. De esta manera, la aplicación tiene la obligación de asegurarse de que el valor provisto es único.

El problema con esta estrategia es que tiene que definirse muy bien el valor que debe aportar el usuario para que esté no solo sea único, sino que no mute. 
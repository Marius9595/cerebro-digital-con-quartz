---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: "174"
tags:
  - DDD
---
## ¿Cómo es?
Esta es una de las [[Estrategias para crear identificadores de las entidades]] donde  otro sistema o servicio ha determinado la identidad. Esto es un input o un valor selecionable  por el usuario.

Esto implica que se tenga que lidiar con integraciones entre [[Bounded Context]] para encontrar, coincidir y asignar la identidad. Lo deseado es un match perfecto. Sin embargo, normalmente los inputs de los usuarios son bastante coincidentes con varios resultados. Por esto se usar un buscador tipo LIKE para que usuario seleccione un valor único.

Por otro lado, hay un problema de asíncronía que se puede resolver usand o[[Event-Driven Architecture]]. De esta manera, el [[Bounded Context]] local se suscribe a eventos de sistemas externos. 

Por todo lo anterior, esta es la estrategia más compleja entre las posibles.
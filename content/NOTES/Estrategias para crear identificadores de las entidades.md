---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: "173"
tags:
---
## ¿Cuáles son?

Hay varias estrategias que permiten generar identidades para las entidades, pueden ser más o menos complejas, pero lo que está claro es que hay que valorar cuáles son los side-effects de estas sobre nuestro contexto. Estas estrategias son las siguientes:

* [[Permitir a los usuarios proveer la identidad]]
* [[Generar la identidad en la aplicación]]
* [[Delegar la generación de la identidad en el sistema de persistencia]]
* [[Delegar a otro Bounded Context la tarea de generar la identidad]]

Entre estas estrategias hay que tener en cuenta el [[Impacto del momento en el que se produce una identidad (DDD)]] y la eficiencia de la identidad para crear relaciones (sino usar la [[Surrogamiento del identidad]])
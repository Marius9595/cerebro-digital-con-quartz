---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 2- Domains, Subdomains and Bounded Contexts
paginas: "87"
tags:
  - DDD
---
## ¿Por qué
Un [[Bounded Context ]]debe ser tan grande como sea neceario para expresar completamente su [[Lenguaje Ubicuo]]. Es decir, que ni más ni menos. Así se debe rechazar cualquier que no encaje debe ser mandado a otro subdominio. Para esto es necesario usar [[Context Maps]] para hace estas evaluaciones.

Así pues, durante cada iteración, hay que hacer challenge de nuestras suposiciones sobre el modelo, para saber si hay que agregar o eliminar un concepto o cambiar la forma en que los conceptos se comportan y colaboran.

En cualquier caso, cuando en un  [[Bounded Context]] los modelos dan la sensación de complitud, pureza, poder y posiblemente elegancia y belleza. Estamos en el buen camino.

Todo esto puede verse truncado si permitimos erroneamente incluencias arquitectónicas, en lugar de lenguaje ubicuo, nos guien. Es decir, límites técnicos en lugar de lingüisticos. Por otro lado, podría ser hacer una separación de [[Bounded Context]]s para distribuir las tareas a los recursos de desarrollador disponibles. Cualquiera de estos casos provoca una fragmentación del [[Lenguaje Ubicuo]] que los quita su expresividad. No obstante, se puede pensar en términos técnicos pero simplemente estos no deben ser el driver para definirlos
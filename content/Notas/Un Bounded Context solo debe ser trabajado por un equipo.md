---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 2- Domains, Subdomains and Bounded Contexts
paginas: "88"
tags:
  - DDD
---
## ¿Por qué?
Simplemente se trata de afirmar que es mejor que un equipo bien definido y cohesivo de expertos y desarrolladores en el dominio se centre en un [[Lenguaje Ubicuo]] modelado en un [[Bounded Context]]. Si se asigna a dos o más equipos distintos al mismo [[Bounded Context]], cada equipo contribuirá a un [[Lenguaje Ubicuo]] divergente y mal definido.

También existe la posibilidad de que dos equipos colaboren en el diseño del [[Shared Kernel]] (que en realidad no es un [[Bounded Context]]). Sin embargo, este patrón de mappeo forma una relación intima entre estos equipos, que requiere una consulta continúa cuando se consideran necesarios cambios en el modelo. Este enfoque es menos común y, por lo general, se evita si es posible.
---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 6-Simple Design
paginas: "249"
tags:
  - Diseño-software
  - Observación
---
>A simple design is a design in which high-level policies are ignorant of  low-level details. Those high-level policies are sequestered and isolated  from low-level details such that changes to the low-level details have no  impact on the high-level policies.

El medio principal para crear esta separación y aislamiento es la [[Abstracción]]. En la práctica esto se traduce en aplicar interfaces polimorficas (alto nivel). Con lo cual los detalles debajo nivel quedan detras de las implementaciones:

![[polymorphism.png]]

Por tanto se puede decir que el mejor diseño debe tener el menor cantidad de abstracciones que logren aislar la política de alto nivel del detalle de bajo nivel
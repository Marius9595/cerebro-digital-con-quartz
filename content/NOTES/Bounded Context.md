---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 2- Domains, Subdomains and Bounded Contexts
paginas: 76, 81
tags:
  - DDD
---
## ¿Qué es?

Se trata  de una solución específica, una vista de realización de la empresa una vez está desarrollada. Esta se utiliza para realizar una solución como software. Para ello es necesario crear una frontera explícita donde  modelos de dominio  vivan. Estos expresan el [[Lenguaje Ubicuo]]. Esta frontera es creada porque cada conceptos modelado en su interior, con sus propiedades y operaciones, tienen un significado especial.

Un [[Bounded Context]] no necesariamente abarca solo el modelo del dominio, aunque es cierto que  su ocupación es la razón principal de la existencia de esto. Sin embargo, a menudo marca un sistema, una aplicación o un servicio empresarial. Estos al final actúan como una [[Facade]] del modelo y sirven como gestores de tareas que transforman el flujo de peticiones en execución de lógica de dominio. Es decir, están dentro porque dan soporte para la interacción con los modelos de dominio

En general, se puede determinar una separación adecuada porque los objetos similares tienen diferentes propiedades y operaciones. Sin embargo, si se ve exactamente los mimos objetos en múltiples contextos, probablemente signifique que hay algún error de modelado, a menos que ambos [[Bounded Context]]s estén utilizando un [[Shared Kernel]]




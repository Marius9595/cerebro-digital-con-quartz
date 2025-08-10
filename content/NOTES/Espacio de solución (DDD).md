---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 2- Domains, Subdomains and Bounded Contexts
paginas: 76 -
tags:
  - DDD
---
## ¿Qué es?
Se trata del espacio donde se pone el foco en cómo se va a implementar el software que va a resolver un desafió empresarial, una vez se tiene compresión sobre el [[Espacio del problema (DDD)]] pues es necesario los conocimientos adquiridos para trabajar esta parte. 

Esto está fuertemente influenciado por los sistemas y tecnologías existentes, y por aquellos que se van a crear recientemente. 

Este espacio trata de la definición de uno más [[Bounded Context]]s (Cada uno con un conjunto de modelos específicos de software). Dentro de estos se trabaja su propio [[Lenguaje Ubicuo]]. Para esto puede considerar las siguientes preguntas:

* ¿Qué ativos de software ya existen y pueden ser reutilizados?
* ¿Qué activos hay que adquirir o desarrollar?
* ¿Cómo se conectan o integran todos ellos entre sí?
* ¿Qué integración adicional se necesitará?
* Teniendo en cuenta los activos los activos existentes y los que hay que crear, ¿Cúal es el esfuerzo necesario?
* ¿Tienen una alta probabilidad de éxito la iniciativa estratégica y todos los proyectos de apoyo, o alguno de ellos hará que el programa global se retrase o incluso fracase?
* ¿En qué se diferencian completamente los términos del [[Lenguaje Ubicuo]]?
* ¿Dónde hay superposición e intercambio de conceptos y datos entre [[Bounded Context]]s?
* ¿Cómo se mapean y traducen los términos compartidos y/o los conceptos superpuestos entre los [[Bounded Context]]s?
* ¿Qué [[Bounded Context]] contiene los conceptos que abordan el [[Domino central]] y cuales son patrones tácticos que serán usados para modelarlo?
* 
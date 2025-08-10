---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: "181"
tags:
  - DDD
---
## ¿Qué implica?
Hay dos posibles momentos:
1) Antes de instanciar el objeto que representa la [[Entidad (DDD)]] y pasarlo como parte de esto
2) En la persistencia

El segundo caso es el más simple e implica que la identidad está disponible una vez está persistidad la entidad. Pero tiene problemas con [[Event-Driven Architecture]]. 

Y también hay problemas cuando se trata de [[Agregado (DDD)]] está compuesta por un conjunto de [[Entidad (DDD)]], pues estos son indistinguibles entre sí y con el vacío (nulll -1... etc). Para resolver esto se puede hacer dos cosas:

1) Generar la identidad previa a la persistencia
2) Hacer una comparación como se hace por valores con los [[Value Object]]s
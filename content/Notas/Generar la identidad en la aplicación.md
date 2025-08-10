---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: 173- 174
tags:
  - DDD
---
## ¿Cómo es?
Esta es una de las [[Estrategias para crear identificadores de las entidades]] donde la aplicación usa un algoritmo (de una librería o self-made)  para generar la identidad y asegurar que es única.

Esta estrategia debe tener en cuenta cómo la aplicación está puesta en producción: nodo único, clusterizada, distribuida... etc para implementar una estrategia de generación de identidades que sea correcto. Hay varios patrones  que permiten alcanzar un alto grado de fiabilidad. Entre estos tenemos a  [[Universally Unique Identifier  (UUID)]] o [[Globally Unique Identifier (GUID)]]. Variaciones de estas pueden ser la concatenación de elementos contextuales cómo pueden ser:
* Tiempo en el nodo de computo (ms)
* IP del nodo de computo
* La identidad del objeto factoría que producirá la creación de la [[Entidad (DDD)]]
* Un número random generado

El problema de estos identificadores es que no son humanamente entendibles a nivel de sistema de persistencia pues no es lo más optimo para crear relaciones entre colecciones o tablas. 
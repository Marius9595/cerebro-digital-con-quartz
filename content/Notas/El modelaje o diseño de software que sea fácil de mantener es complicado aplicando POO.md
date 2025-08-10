---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "33.14"
minutoFin: "41.08"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

El principio fundamental de la [[POO]] es la encapsulación que significa que pocas palabras: Agrupar en objetos datos y comportamiento y no exponer los datos sino operaciones sobre estos con métodos ([[Tell, Don`t ask]]). Esto ha hecho que aparecieran antipatrones como [[Active Record]] donde operaciones sobre entidades de tipo persistencia se encapsularan sobre objetos de tipo X.

Luego, [[Eric Evans]] escribió un libro sobre [[Domain Driving Desing]] donde explica patrones de diseño para hacer más fácil mantener software separando objetos en dos categorías:

* Entidades y value objects
* Servicios

En los values objects son elementos que carecen de comportamiento y solo encapsulan conjuntos de datos para dar sentido a dominio cuando están bajo una entidad (elemento importante en el dominio sobre el cual existe un ciclo de vida) y los servicios son los elementos que operan con estos conjuntos de datos.

De la manera que [[Eric Evans]], bajo la experiencia de [[Mark Seeman]] se genera un código que tiene éxito porque se mantiene con el tiempo bien. Sin embargo, al igual que pasa que [[La arquitectura de puertos y adaptadores en POO requiere de un gran esfuerzo para aplicarla bien y mantenerla]],  esto requiere de mucho esfuerzo para entender por qué esto genera un software más fácil de mantener, cómo aplicar los patrones de diseño y lo más complicado que todas las personas mantengan el mismo mindset.

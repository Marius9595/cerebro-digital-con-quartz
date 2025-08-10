---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "52.24"
minutoFin: 
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Según [[Jessica K]]: Una función tiene aislamiento cuando **la única información que tiene sobre el mundo externo es aquella que se le pasa a través de sus argumentos**. Esto significa que la función **no posee ningún conocimiento implícito** sobre el mundo exterior; todo lo que necesita para operar debe ser proporcionado explícitamente como entrada. Esto es una cualidad deseada en una Función

De esta manera, una [[Función Pura]] es un subconjunto de funciones con aislamiento


## ¿Por qué es importante?

El aislamiento es fundamental para el [[Unit Testing]]:

* Una prueba unitaria se define como una prueba automatizada que prueba una unidad "**en aislamiento de sus dependencias**".
* Aunque los expertos a menudo discuten qué constituye una "unidad", el aspecto del "aislamiento" es crucial para Mark Seemann
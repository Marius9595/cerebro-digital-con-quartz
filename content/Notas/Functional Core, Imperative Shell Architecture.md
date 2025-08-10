---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "12.00"
minutoFin: 
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Se trata de una arquitectura similar a la [[Arquitectura Hexagonal]] en cuanto a que el código de domino está en el centro y la infraestructura alrededor o al borde.

Esta arquitectura hace enfásis en que [[En la lógica de dominio hay que seguir los principios de diseño para generar código "puro"]] y [[Hay mantener el código IO alejado de la lógica de negocio]] y este será impuro e imperativo.

Además, para hacer un desarrollo iterativo incremental, hay que fraccionar la aplicación en [[Domain-centric workflow]]s

Un ejemplo reflejado en el código es el siguiente:

![[Pasted image 20250709210948.png]]

manteniendo el código de domino puro logramos:

*  que no tenga que preocuparse por operaciones asincronas, pues estas surgen de operaciones IO y esto ya las hemos alejado. 
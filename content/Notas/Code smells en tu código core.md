---
charla: "[[Moving IO to the edges of your app -  Functional Core Imperative Shell]]"
minutoInicio: 
minutoFin: 
tags: 
num_veces_leida: 0
---
## ¿Que son?
Son síntomas de que tu código tiene alguna operación IO oculta o al menos no explítica.
## ¿Cuáles son?
* Hay algún proceso asíncrono
* Se lanza alguna excepción
* Tienes lanzamiento de excepciones para gestionar el flujo de ejecución en lugar de retornar un valor 
---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "48.05"
minutoFin: "55.44"
tags: 
num_veces_leida: 0
---
## ¿Qué es?
Es una de las [[Estrategias para gestionar dependencias]] que propone:

> Pasar solo las dependencias necesarias para una particular función/método

Las dependencias en este caso no son interfaces, sino cosas que hace una operación concreta:

![[Pasted image 20250710001117.png]]

De esta manera, el código se autodocumenta y queda claro lo que necesita de inputs la operación y lo que devuelve.

Sin embargo, con código que anidado se complica, [[Scott Wlaschin]] aconseja usar esta estrategia en lugar de [[Dependecy Rejection]] cuando no es posible mover a los border los procesos IO por la razón que sea
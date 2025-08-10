---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "36.27"
minutoFin: 
tags: 
num_veces_leida: 0
---
## ¿Por qué?
Según [[Scott Wlaschin]], esto no pertenece a la lógica de negocio, y debe ocurrir antes de entrar en juego la lógica de negocio. Esto evita realizar programación defensiva y permite trabajar al dominio con datos validos siempre. Esto permite a fin de cuentas a simplificar el código porque se separa operaciones de valor para el negocio de las validaciones.

## ¿Qué ocurre si no hay algo válido?
Se hace skip de la lógica de negocio porque se entiende que no tiene sentido procesar información invalida, y se procede a ejecutar otro proceso IO que "comunique" o opere ante esta situación


![[Pasted image 20250709232523.png]]
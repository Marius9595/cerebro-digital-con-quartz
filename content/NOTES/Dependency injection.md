---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "48.05"
minutoFin: "55.44"
tags: 
num_veces_leida: 0
aliases:
  - Injección de dependecias
---
## ¿Qué es?
Es una de las [[Estrategias para gestionar dependencias]] que propone:

>Pasar las dependencias por constructor a una clase como un todo

Hacer esto puede provocar que una clase tenga una serie de dependencias que aparentemente no tienen sentido juntas pero es necesario porque la clase tiene algún método que usa cada una de una manera separada.

Por otro lado, al tener que borrar algo de una interfaz, no es tan directo saber si en otra parte donde es injectada se usa y por tanto puede ocasionar un miedo a la  rotura y por tanto en lugar de optimizarlo, crecen hasta ser insostenibles y es necesario hacer un análisis importante para poder realizarlo.

![[Pasted image 20250710001420.png]]

Es por esto, que este en lugar de este enfoque clásico, [[Scott Wlaschin]] prefiere [[Dependency parametrization]].

No obstante, es posiblemente la estrategia más conocida y estándar (la aplican los frameworks normalmente)
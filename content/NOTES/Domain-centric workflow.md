---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "2.44"
minutoFin: "6.10"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Un workflow es equivalente a una historia de usuario. Desde esto, [[Scott Wlaschin]] propone trabajar en una arquitectura [[Domain Driving Desing]] porque pone la lógica de dominio en el centro y la lógica IO en los bordes. Por tanto un domain-centric workflow se trata de un "slice" cómo se ilustra en la siguiente imagen:

![[Pasted image 20250709203856.png]]

Con esta arquitectura, [[Scott Wlaschin]] consigue cumplir principio de diseño de [[Hay mantener el código IO alejado de la lógica de negocio]]  de una manera efectiva.

Un caso de uso se ilustra a continuación:

![[Pasted image 20250709204031.png]]
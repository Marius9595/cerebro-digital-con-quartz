---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "29.10"
minutoFin: "33.14"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

En el [[Ejemplo -> Restaurant Booking]], [[Mark Seeman]] muestra como al escribir funciones puras para la lógica de negocio (Dominio) y la capa de aplicación (donde se adapta el modelo de negocio al exterior y viceversa)  y la parte impura para las operaciones IO. Automáticamente se centra siguiendo el principio de [[Puedes llamar funciones puras en funciones impuras, pero no lo hagas al revés]] a la hora de generar  hacer la composición. Esto se lleva al límite con [[Haskell]] cuando esto te lo fuerza por typing. Es decir, que si intentas romper el principio, el programa no te compilara y te forzará a hacerlo bien sin necesidad de estar vigilando que todo el mundo cumpla las guías

![[Pasted image 20250722010459.png]]
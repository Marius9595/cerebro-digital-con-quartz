---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "43.34"
minutoFin: "51.41"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

[[Mark Seeman]] muestra un ejemplo de un código creado con [[TDD]] utilizando principios de diseño de [[POO]]:

![[Pasted image 20250722014914.png]]

Aquí se observa, que las dos últimas lineas son las que dan valor. El resto son elementos introducidos simplete y llanamente para hacer el software mas testeable ([[Dependency injection]], Creación de interfaces... etc).  Esto quiere decir, que para hacer testing necesitamos tirar de polimorfismo para crear [[Dobles de tests]] y que permitan comprobar toda la funcionalidad.

Sin embargo, [[Mark Seeman]] muestra con diseño con [[Programación funcional]] se obtiene un diseño más fácil con la misma testeabilidad. Pero en este caso la dependencia solo necesita de que se inyecte una función que cumpla con el contrato (no está ligada a una clase o interfaz):

![[Pasted image 20250722015349.png]]

Además, siguiendo el ideal de trabajar con [[Función Pura]]s, este diseño permite hacer que el artefacto de check pueda ser resultado de una composición de funciones puras en los tests (por tanto hacerlo testeable 100%, determinsta), aunque en la parte productiva sea una función impura
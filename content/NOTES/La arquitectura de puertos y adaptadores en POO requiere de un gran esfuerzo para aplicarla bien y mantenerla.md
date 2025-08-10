---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "9.12"
minutoFin: "12.32"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

Primero hay un esfuerzo importante que hacer para explicar a un equipo de personas que desarrollan que nunca han escuchado sobre la [[Arquitectura Hexagonal]] el por qué necesitamos aplicarla. Sobre todo cuando para aplicarla es necesario entender principios de diseño de la [[Programación Orientada a Objetos]] como pueden ser los [[Principios SOLID]], [[Inyección de dependencias]]... etc. Y para entenderlos con la profundidad necesaria es necesario consumir bibliografía no poco extensa.

Luego, lo más complicado es mantener en "orden" o "rectitud" la aplicación de todos esos principios en armonía para que se cumpla la arquitectura. Esto se debe a que esto puede ser "derrumbado" ante cada modificación o extensión del sistema (perturbaciones). Por ejemplo, si por urgencia se decide saltar alguna de las capas para que el Dominio tenga "acceso" a Infrastructura, nada lo impide y posiblemente sea algo que genere intereses negativos como [[Deuda Técnica]] y sino se ataja mayor es el interés (tiempo a invertir) a pagar con el paso del tiempo. En definitiva, que se pueda hacer esto quiere decir que todo ese edificio de principios y demás pueden caerse porque los cimientos pueden ser quitados sin ninguna red de seguridad más que la convención
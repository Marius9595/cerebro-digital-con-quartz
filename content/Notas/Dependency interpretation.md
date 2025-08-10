---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "55.45"
minutoFin: 
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Es una de las [[Estrategias para gestionar dependencias]]. Esta propone:

>Reemplazar las llamadas a las dependencias con instrucciones que serán interpretadas después por un "interprete" que será el que ejecutara el código IO

![[Pasted image 20250710002445.png]]

La ventaja de esto es que se crea una API orientado al dominio, no hay IO pues se sustituye por una instrucción con la cual se puede operar y se puede hacer un proceso de optimización, pues puede mergearse estructura de datos  

Lo malo es que terriblemente complicado y solo soporta un conjunto limitado de operaciones. Twitter Stich y Facebook Haxl 
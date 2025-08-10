---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "18.32"
minutoFin: "21.42"
tags: 
num_veces_leida: 0
---
## ¿Cómo es esto?

[[Scott Wlaschin]] propone, en lugar de crear una interfaz o abstracción desde la cual hacer varias implementaciones, simplemente reemplazar el código IO de los bordes y mantener el código de dominio. De esta manera, propone trabajar como si piezas de lego se trataran. Al final, el reemplazo de código IO seguiran recuperando o mandando los mismos datos y por tanto el código de dominio le dará igual mientras estos den los inputs y procesen los outputs de este.

Un ejemplo de esto es lo siguiente:

![[Pasted image 20250709212804.png]]

![[Pasted image 20250709212824.png]]

![[Pasted image 20250709212849.png]]
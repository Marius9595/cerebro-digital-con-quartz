---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "33.07"
minutoFin: "36.23"
tags: 
num_veces_leida: 0
---
## ¿Cómo es esto?

La siguiente imagen es una resumen claro:

![[Pasted image 20250709231209.png]]

Con este enfoque no hacen falta usar dobles de tests para la lógica de negocio. Si acaso en los bordes (operaciones IO):

![[Pasted image 20250709231425.png]]


Con este enfoque [[Scott Wlaschin]] hace enfásis en que [[System Under Test (SUT)]] debe ser una unidad lógica que aporta valor al negocio. En este sentido, hacer tests de los [[Domain-centric workflow]]s.  


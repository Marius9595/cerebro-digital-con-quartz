---
charla: "[[Moving IO to the edges of your app -> Functional Core Imperative Shell]]"
minutoInicio: "6.17"
minutoFin: "10.45"
tags: 
num_veces_leida: 0
---
## ¿Cuáles son los principios?

* El código debe ser comprensible. Esto significa que:
	* Todo debe ser explicitamente dado por los inputs para que no nos preguntemos ¿Qué es lo que necesitamos para que se haga la operación X?
	* Debe haber un output, para que entendamos cual es el resultado de la operación y podamos verificarlo
* El código debe ser determinista: Dados unos inputs, siempre debemos obtener los mismos outputs
* No tiene side-effects: No se produce ningún proceso adicional que salga del ámbito del proceso y que además no vaya al "exterior" de la applicación (IO)
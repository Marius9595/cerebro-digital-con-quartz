---
charla: "[[Functional architecture - The pits of success]]"
minutoInicio: "15.15"
minutoFin: "16.50"
tags: 
num_veces_leida: 0
---
## ¿Por qué?

[[Mark Semman]] hace el siguiente razonamiento

* Si compones funciones impuras, siguen siendo el resultado impuro. No pasa nada, todo es impuro
* Si creas un función impura donde funciones de más "bajo nivel" son puras no pasa nada porque que sea mas o menos impura no es relevante
* Pero si la función de "alto nivel" quieres que intente ser pura pero tiene alguna de más bajo nivel impura, hay un problema de diseño, se ha colado un [[Side-Effects]] y habría que ver la manera de empujar esa impureza fuera. Hay lenguajes como [[Haskell]] que ni si quiera compila
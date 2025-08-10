---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Análisis sintáctico de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?
A cada [[Fórmula Proposicional]] X le corresponde un [[Árbol sintáctico]] y este árbol sintáctico tiene un determinado número de nodos en total. Así, se puede considerar la función Nod(X), que hace corresponder a cada fórmula con el total de nodos de su árbol sintáctico.

![[numero-total-de-nodos.excalidraw]]

## Ejemplo 
Puesto que existe un procedimiento para detectar la conectiva principal de X, si se preguntara a la fórmula cuántos nodos va a producir se podría obtener una respuesta parcial como la siguiente:

- _“Puesto que sé que soy una fórmula de tipo (Y∗Z), mi total de nodos es 1 (el mío) más los nodos de la fórmula Y más los nodos de la fórmula Z”_.

Una fórmula de tipo (¬Y) daría una respuesta ligeramente distinta, pero de nuevo parcial:

- _“mi nodo más los nodos que desarrolle Y”_.

En ambos casos, para calcular Nod(X) hay que volver a calcular la misma función pero ahora de sus componentes: Nod(Y) y Nod(Z). Este tipo de cálculo se denomina recursivo. En este caso no tiene una profundidad infinita porque se llega necesariamente a componentes atómicas que aportan 1 nodo, sin referencia a la aportación de otras fórmulas.
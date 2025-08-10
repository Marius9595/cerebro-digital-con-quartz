---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Generación de fórmulas proposicionales
tags: 
num_veces_leida: 1
---
## ¿Cuáles son?

Las reglas para construir nuevas expresiones a partir de una o dos expresiones previas, añadiendo paréntesis y conectivas si fuera necesario, son:

1. Si X es un símbolo proposicional (⊥,⊤ o pk) entonces X es ya una fórmula
2. Si X es una fórmula entonces (¬X) es una fórmula
3. Si X e Y son fórmulas entonces (X∧Y), (X∨Y), (X→Y) y (X↔Y) son fórmulas
4. Nada más es una fórmula proposicional

Cualquier [[Fórmula Proposicional]] producida puede ser posteriormente considerada como componente de una nueva fórmula, generada por otra aplicación de estas reglas.

El proceso de generación descrito requiere la existencia de fórmulas previas para producir otras, más complejas. Pero este proceso no sería realizable sin una base de partida: se necesita disponer de unas fórmulas iniciales, cuya construcción no dependa de otras.
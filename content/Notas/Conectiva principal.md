---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Análisis sintáctico de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Se trata de la conectiva introducida en el último paso de la generación de una [[Fórmula Proposicional]]. Sea X una fórmula proposicional:

- Si X es una fórmula atómica no tiene conectiva principal.
- Si X es una fórmula del tipo (¬Y) tiene a esa negación inicial como conectiva principal.
- Si X es del tipo (Y∗Z) tiene esa conectiva binaria ∗, una entre {∧,∨,→,↔}, como conectiva principal.

Para identificarla/detectarla existe un procedimiento en cualquier fórmula X (y por tanto el tipo de fórmula que es conforme a la [[Descomposición única]]). Para ello, se asume que toda fórmula proposicional tiene sus paréntesis correctamente anidados y balanceados (en pares apertura-cierre). Así, la detección sistemática de la conectiva principal sigue este proceso:

- Si la fórmula no tiene un paréntesis inicial es una fórmula atómica y no tiene conectiva principal.
- Si se recorre cualquier fórmula no atómica llevando el recuento de los paréntesis abiertos menos los cerrados, la conectiva principal es a la que se llega con _todos los paréntesis cerrados menos uno_, el inicial de la fórmula.
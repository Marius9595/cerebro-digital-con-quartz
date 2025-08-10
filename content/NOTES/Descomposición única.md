---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Análisis sintáctico de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?
Es un principio que enuncia: 

> Dada una fórmula proposicional, su generación puede ser rastreada hacía atras de manera unívoca, es decir, existe un único "último paso" que describe cómo se obtuvo dicha fórmula a partir de fórmulas más simples y operadores lógicos o conectivas

Formalmente:
Si X es una fórmula proposicional entonces se encuentra en uno y _sólo uno_ de estos siete casos:

- Es una fórmula atómica.
- Existe una única fórmula Y tal que X es (¬Y).
- Existen dos únicas fórmulas Y y Z, así como una única conectiva binaria ∗ en {∧,∨,→,↔}, tales que X es (Y∗Z).

El concepto de descomposición única es clave porque garantiza que cualquier fórmula puede ser reconstruida sin ambigüedad desde sus partes constituyentes. Aunque puede parecer intuitivo, es necesario demostrarlo rigurosamente usando inducción sobre la estructura de las fórmulas.
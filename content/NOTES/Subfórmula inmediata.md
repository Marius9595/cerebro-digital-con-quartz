---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Análisis sintáctico de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?
La detección de la [[Conectiva principal]] de una fórmula X decide el tipo de la fórmulas. Y en la definición de cada tipo aparecen a lo sumo dos fórmulas componentes de X. A estas fórmulas componentes de X se las conoce como _subfórmulas inmediatas_ de X.

Formalmente podemos detallarlo de la siguiente manera:
Sea X una fórmula proposicional.
- Si X es una fórmula atómica entonces no tiene subfórmulas inmediatas.
- Si X es una fórmula del tipo (¬Y) tiene a Y como subfórmula inmediata.
- Si X es una fórmula del tipo (Y∗Z) tiene a Y y Z como subfórmulas inmediatas.
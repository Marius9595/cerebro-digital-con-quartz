---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Notaciones alternativas
tags: 
num_veces_leida: 0
---
## ¿Qué es?

En notación prefija, la conectiva se escribe antes que sus dos componentes y sin uso de paréntesis: ∗XY. Así, las fórmulas en notación prefija se puede obtener mediante el siguiente esquema de producción:

F::=pk∣⊤∣⊥∣¬F∣∧FF∣∨FF∣→FF∣↔FF

 Es más fácil de procesar por un sistema automático, aunque es menos legible para las personas. Para automatizar el tratamiento de fórmulas prefijas se suelen representar en una estructura de datos de uso general en programación: la lista de elementos.
 
La implementación de las fórmulas proposicionales se puede hacer representándolas como listas anidadas. La producción de fórmulas con esta notación se define en la siguiente expresión:

F::=pk∣⊤∣⊥∣[¬,F]∣[∧,F,F]∣[∨,F,F]∣[→,F,F]∣[↔,F,F]

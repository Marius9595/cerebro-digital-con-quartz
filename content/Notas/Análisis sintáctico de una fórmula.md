---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Análisis sintáctico de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Es un proceso que se aplica a una [[Fórmula Proposicional]] X. 

Esta consisten en:
- _Descomposición de X_. Se puede determinar cuál es la última conectiva ([[Conectiva principal]]) utilizada en su producción, así como las [[Subfórmula inmediata]]s utilizadas en ese paso.
- _Análisis de las subfórmulas inmediatas de X_. Estas subfórmulas inmediatas de X son a su vez fórmulas, susceptibles de ser analizadas de la misma manera: detectando su [[Conectiva principal]]y sus componentes inmediatas.
- _Análisis de cada subcomponente encontrada_. Lo mismo ocurre con cada componente que se va detectando en este proceso de descomposición, a cualquier nivel: es una nueva fórmula que admite este mismo análisis.

La fórmula X inicial es siempre una expresión finita. Y esta propiedad garantiza que el proceso finaliza siempre. Así, este proceso acaba en todas sus líneas de análisis porque se llega necesariamente a componentes atómicas, donde se finaliza la descomposición.

Ejemplo usando un [[Árbol sintáctico]]:
![[arbol-sintactico.excalidraw]]
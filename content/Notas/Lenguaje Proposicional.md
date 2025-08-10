---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Generación de fórmulas proposicionales
tags: 
num_veces_leida: 1
---
## ¿Qué es?
El lenguaje proposicional (Lprop) es el conjunto formado, exclusivamente, por todas las [[Fórmula Proposicional]]es. Se puede precisar un poco más como una restricción condicional que se exige en ambos sentidos:

- _Si X es una fórmula entonces X es un elemento del lenguaje_: todas las fórmulas pertenecen al lenguaje proposicional.
- Si X es un elemento del lenguaje entonces X es una fórmula: nada más es elemento del lenguaje, se descartan elementos que no sean fórmulas.

Tras esta definición, las siguientes tres frases se consideran equivalentes y se utilizará una u otra indistintamente:

- X se ha producido por aplicación de las [[Reglas de generación de fórmulas proposicionales]].
- X es una [[Fórmula Proposicional]]
- X pertenece al lenguaje proposicional: X∈Lprop.

_Para confirmar_ que una expresión es una [[Fórmula Proposicional]] basta mostrar detalladamente su proceso de generación: cómo se ha producido, paso a paso, a partir de las reglas de generación. Para ello basta aportar una [[Secuencia de generación de una fórmula X]].

_Para descartar_ que una expresión sea una fórmula (para confirmar que no lo es) hay que _demostrar_ que no se puede generar de ninguna forma a partir de esas reglas, que no coincide con ninguna fórmula posible. Y estas demostraciones, que recorren estructuradamente infinitos elementos, se conocen como _demostraciones inductivas_
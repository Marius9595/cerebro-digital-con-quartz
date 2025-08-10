---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Notaciones alternativas
tags: 
num_veces_leida: 0
---
## ¿Qué son?

Son una serie de convenciones establecidas para facilitar la lectura de [[Fórmula Proposicional]]es en términos de omisión de paréntesis, pero sin pérdida de precisión en la estructura de la fórmula que se comunica, pues rompen la ambigüedad que puede surgir al omitir dichos paréntesis.

Eliminar o no un par de paréntesis es siempre una decisión del autor, confiando en que el lector los repondrá correctamente conforme al acuerdo de precedencia. En algunos casos, se puede optar por mantener algunos paréntesis que podrían eliminarse, si se considera que no sobrecargan la legilibidad de la fórmula.

Algunos paréntesis no pueden omitirse nunca, porque su reposición (conforme a precedencia) los situaría en una posición distinta y por tanto no se habría transmitido la fórmula que se pretendía comunicar.

el orden de precedencia que se ha de usar es :

> 1. negaciones,
> 2. conjunciones
> 3. disyunciones
> 4. condicionales
> 5. bicondicionales

En caso de duda entre dos conectivas, se debe considerar con un _anidamiento más interno_ (_por debajo_ en el árbol sintáctico) la conectiva con menor orden de precedencia.

_Agrupación por la izquierda_. Adicionalmente, la repetición de una misma conectiva binaria ∗ se considerará agrupada binariamente por la izquierda. Así, p∧q∧r se considera una fórmula con la estructura siguiente: ((p∧q)∧r).
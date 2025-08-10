---
curso: "[[Agents Course]]"
bloque: "U1:  ¿Qué son las Herramientas?"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Es una función con un objetivo claro proporcionada al [[Modelo de Lenguaje Grande|LLM]] como un complemento. 

Al final, **los [[Modelo de Lenguaje Grande|LLM]]s predicen la finalización de un prompt basándose en sus datos de entrenamiento**, lo que significa que su conocimiento interno solo incluye eventos anteriores a su entrenamiento. Por lo tanto, si tu agente necesita datos actualizados, debes proporcionarlos a través de alguna herramienta.

## ¿Cómo debe ser?

Debe cumplir lo siguiente:
- Una **descripción textual de lo que hace la función**.
- Un _Callable_ (algo para realizar una acción).
- _Argumentos_ con tipos.
- (Opcional) Salidas con tipos.


---
curso: "[[Agents Course]]"
bloque: "U1: Pensamiento Interno y el Enfoque Re-Act"
orden: "2"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

Es una técnica de [[Prompting]] simple que  concatena“Razonamiento” (Think) con “Actuar” (Act). Con esta se añade “Pensemos paso a paso” antes de permitir que el LLM decodifique los siguientes tokens. De hecho, indicar al modelo que piense “paso a paso” fomenta el proceso de decodificación hacia los siguientes tokens **que generan un plan**, en lugar de una solución final, ya que se anima al modelo a **descomponer** el problema en _sub-tareas_. Esto permite que el modelo considere los sub-pasos con más detalle, lo que en general conduce a menos errores que intentar generar la solución final directamente.

![[Pasted image 20250719225818.png]]
El (d) es un ejemplo del enfoque Re-Act donde indicamos "Pensemos paso a paso"

Es más, el impacto de esta forma de actuar por parte de un [[Modelo de Lenguaje Grande|LLM]] está siendo explotada incluso en la fase de afinamiento para incluir siempre secciones específicas de _pensamiento_ (encerradas entre tokens especiales `<think>` y `</think>`). Esto no es solo una técnica de prompting como ReAct, sino un método de entrenamiento donde el modelo aprende a generar estas secciones después de analizar miles de ejemplos que muestran lo que esperamos que haga.
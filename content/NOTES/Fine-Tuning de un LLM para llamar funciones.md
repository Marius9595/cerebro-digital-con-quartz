---
curso: "[[Agents Course]]"
bloque: "U1 Bonus: ¿Qué es la Llamada de funciones?"
orden: "1"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

Se trata de introducir en el entrenamiento típico de un [[Modelo de Lenguaje Grande|LLM]] la capacidad de aprender también la  llamada a funciones para no tener que aplicar prompting o no depender de estos. 

Para conseguir esto, se introduce nuevos roles posibles en las conversaciones:

1. Un nuevo rol para una **Acción**
2. Un nuevo rol para una **Observación**

Y esto es parcialmente cierto, el modelo formatea la acción a tomar como un mensaje de “asistente”. La plantilla de chat luego representará esto como  [[Tokens especiales]]  para la llamada a funciones:

- `[AVAILABLE_TOOLS]` – Inicio de la lista de herramientas disponibles
- `[/AVAILABLE_TOOLS]` – Fin de la lista de herramientas disponibles
- `[TOOL_CALLS]` – Hacer una llamada a una herramienta (es decir, realizar una “Acción”)
- `[TOOL_RESULTS]` – “Observar” el resultado de la acción
- `[/TOOL_RESULTS]` – Fin de la observación (es decir, el modelo puede decodificar nuevamente)

## ¿Cómo se hace?

Se puede partir desde un [[Modelo base]] pero **requeriría más entrenamiento para aprender a seguir instrucciones, chatear Y hacer llamadas a funciones**. Sin embargo, si el punto de partida es un [[Modelo de instrucción]] **minimizamos la cantidad de información que nuestro modelo necesita aprender**.
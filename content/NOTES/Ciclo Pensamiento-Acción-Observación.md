---
curso: "[[Agents Course]]"
bloque: "U1: Entendiendo los Agentes a través del Ciclo de Pensamiento, Acción y Observación"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Se trata del flujo de trabajo completo de un [[Agente IA]]. Este consiste en tres componentes:

1. **[[Pensamientos (Agente IA)]]**: La parte [[Modelo de Lenguaje Grande|LLM]] del Agente decide cuál debe ser el siguiente paso.
2. **[[Acciones (Agente IA)]]:** El agente realiza una acción, llamando a las [[Herramienta de un Agente IA]] con los argumentos asociados.
3. **[[Observación (Agente IA)]]:** El modelo reflexiona sobre la respuesta de la [[Herramienta de un Agente IA]].

Los tres componentes trabajan juntos en un bucle continuo. Para usar una analogía de la programación, el agente utiliza un **bucle while**: el bucle continúa hasta que se cumple el objetivo del agente.

![[AgentCycle.gif]]

Cada ciclo permite al agente incorporar información nueva (observaciones) en su razonamiento (pensamiento), asegurando que la respuesta final esté bien informada y sea precisa.

En muchos frameworks de Agentes, **las reglas y directrices están integradas directamente en el [[System Prompt]]**, asegurando que cada ciclo se adhiera a una lógica definida.

## Ejemplo simple

![[Pasted image 20250719224723.png]]


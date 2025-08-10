---
curso: "[[Agents Course]]"
bloque: "U1: Acciones, Habilitando al Agente para Interactuar con su Entorno"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué son?

Las acciones son los pasos concretos que un **agente de IA toma para interactuar con su entorno**. cada acción es una operación deliberada ejecutada por el agente.

Una parte crucial de un [[Agente IA]] es la **capacidad de DETENER la generación de nuevos tokens cuando una acción está completa**. Esto previene la salida no intencionada y asegura que la respuesta del agente sea clara y precisa.

El LLM solo maneja texto y lo usa para describir la acción que quiere tomar y los parámetros a suministrar a la herramienta.


## Tipos de acciones de Agentes

| Tipo de Agente                | Descripción                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| Agente JSON                   | La Acción a tomar se especifica en formato JSON.                                                         |
| [[Agente de Código]]          | El Agente escribe un bloque de código que es interpretado externamente.                                  |
| Agente de llamada a funciones | Es una subcategoría del Agente JSON que ha sido ajustado para generar un nuevo mensaje para cada acción. |

## Tipos de acciones según el propósito

| Tipo de Acción              | Descripción                                                              |
| --------------------------- | ------------------------------------------------------------------------ |
| Recopilación de Información | Realizar búsquedas web, consultar bases de datos o recuperar documentos. |
| Uso de Herramientas         | Hacer llamadas a API, realizar cálculos y ejecutar código.               |
| Interacción con el Entorno  | Manipular interfaces digitales o controlar dispositivos físicos.         |
| Comunicación                | Interactuar con usuarios a través de chat o colaborar con otros agentes. |
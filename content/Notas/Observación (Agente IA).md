---
curso: "[[Agents Course]]"
bloque: "U1: Observar, Integrando Feedback para Reflejar y Adaptar"
orden: "1"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

Son **señales del entorno (consecuencia de sus [[Acciones (Agente IA)]]**—ya sean datos de una API, mensajes de error o registros del sistema—que guían el siguiente ciclo de pensamiento. Proporcionan información crucial que alimenta el proceso de pensamiento del Agente y guía acciones futuras.

En esta fase el [[Agente IA]]:
- **Recopila Retroalimentación:** Recibe datos o confirmación de que su acción fue exitosa (o no).
- **Añade Resultados:** Integra la nueva información en su contexto existente, actualizando efectivamente su memoria.
- **Adapta su Estrategia:** Utiliza este contexto actualizado para refinar pensamientos y acciones subsiguientes para decidir si se necesita información adicional o si está listo para proporcionar una respuesta final.

## ¿Por qué es importante?

Esta **incorporación iterativa de retroalimentación asegura que el agente permanezca dinámicamente alineado con sus objetivos**, aprendiendo y ajustándose constantemente basado en resultados del mundo real.

## Tipos

|Tipo de Observación|Ejemplo|
|---|---|
|Retroalimentación del Sistema|Mensajes de error, notificaciones de éxito, códigos de estado|
|Cambios de Datos|Actualizaciones de base de datos, modificaciones del sistema de archivos, cambios de estado|
|Datos Ambientales|Lecturas de sensores, métricas del sistema, uso de recursos|
|Análisis de Respuesta|Respuestas de API, resultados de consultas, salidas de cómputo|
|Eventos Basados en Tiempo|Plazos alcanzados, tareas programadas completadas|
## ¿Cómo se añaden los resultados?

Después de realizar una acción, el framework sigue estos pasos en orden:

1. **Analiza la acción** para identificar la(s) función(es) a llamar y el/los argumento(s) a utilizar.
2. **Ejecuta la acción.**
3. **Añade el resultado** como una **Observación**.
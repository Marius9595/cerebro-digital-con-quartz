---
curso: "[[Agents Course]]"
bloque: "U2: Agentes de Recuperación"
orden: "1"
tags: 
num_veces_leida: 0
aliases:
  - RAG Agéntico
---

## ¿Qué son?

Son sistemas que  combinan las capacidades de recuperación de datos y modelos de generación para proporcionar respuestas contextualizadas. El modelo luego genera una respuesta basada en la consulta y la información recuperada.

El [[RAG]] con Agentes (Generación Aumentada por Recuperación) extiende los sistemas [[RAG]] tradicionales al **combinar agentes autónomos con recuperación dinámica de conocimiento**.

Mientras que los sistemas [[RAG]] tradicionales utilizan un [[Modelo de Lenguaje Grande|LLM]] para responder consultas basadas en datos recuperados, el RAG con agentes **permite un control inteligente tanto de los procesos de recuperación como de generación**, mejorando la eficiencia y precisión.

Los sistemas [[RAG]] tradicionales enfrentan limitaciones clave, como **depender de un solo paso de recuperación** y enfocarse en la similitud semántica directa con la consulta del usuario, lo que puede pasar por alto información relevante.

El [[RAG]] con agentes aborda estos problemas permitiendo que el agente formule autónomamente consultas de búsqueda, critique los resultados recuperados y realice múltiples pasos de recuperación para obtener un resultado más personalizado y completo.

Al construir sistemas RAG con agentes, el agente puede emplear estrategias sofisticadas como:

1. **Reformulación de Consultas:** En lugar de usar la consulta del usuario en bruto, el agente puede elaborar términos de búsqueda optimizados que coincidan mejor con los documentos objetivo
2. **Recuperación Multi-Paso:** El agente puede realizar múltiples búsquedas, utilizando los resultados iniciales para informar consultas posteriores
3. **Integración de Fuentes:** La información puede combinarse de múltiples fuentes como búsqueda web y documentación local
4. **Validación de Resultados:** El contenido recuperado puede analizarse para determinar su relevancia y precisión antes de incluirlo en las respuestas

Los sistemas RAG con agentes efectivos requieren una consideración cuidadosa de varios aspectos clave. El agente **debe seleccionar entre las herramientas disponibles según el tipo de consulta y el contexto**. Los sistemas de memoria ayudan a mantener el historial de conversación y evitar recuperaciones repetitivas. Tener estrategias de respaldo garantiza que el sistema pueda seguir proporcionando valor incluso cuando los métodos de recuperación principales fallan. Además, implementar pasos de validación ayuda a garantizar la precisión y relevancia de la información recuperada.

## ¿Cómo funciona?

El agente sigue este proceso:

1. **Analiza la Solicitud:** El agente de Alfred identifica los elementos clave de la consulta—planificación de fiesta temática de superhéroes de lujo, con enfoque en decoración, entretenimiento y catering.
2. **Realiza la Recuperación:** El agente utiliza DuckDuckGo para buscar la información más relevante y actualizada, asegurándose de que se alinee con las preferencias refinadas de Alfred para un evento lujoso.
3. **Sintetiza la Información:** Después de recopilar los resultados, el agente los procesa en un plan coherente y accionable para Alfred, cubriendo todos los aspectos de la fiesta.
4. **Almacena para Referencia Futura:** El agente almacena la información recuperada para un fácil acceso al planificar eventos futuros, optimizando la eficiencia en tareas posteriores.


---
curso: "[[Agents Course]]"
bloque: "U2 Bonus: ¿Qué es la observabilidad y evaluación de agentes?"
orden: "1"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

La observabilidad consiste en entender qué está sucediendo dentro de tu [[Agente IA]] mediante el análisis de señales externas como registros, métricas y rastros. Para los [[Agente IA]], esto significa rastrear acciones, uso de herramientas, llamadas al modelo y respuestas para depurar y mejorar el rendimiento del agente.

## ¿Por qué es Importante la Observabilidad?

Sin observabilidad, los agentes de IA son “cajas negras”. Las herramientas de observabilidad hacen que los agentes sean transparentes, permitiéndote:

- Entender el intercambio entre costos y precisión
- Medir la latencia
- Detectar lenguaje dañino e inyección de prompts
- Monitorear la retroalimentación del usuario

## ## Métricas Clave para Monitorear

**Latencia:** ¿Con qué rapidez responde el agente? Los tiempos de espera largos afectan negativamente la experiencia del usuario. Debes medir la latencia para tareas y pasos individuales rastreando las ejecuciones del agente. Por ejemplo, un agente que tarda 20 segundos para todas las llamadas al modelo podría acelerarse utilizando un modelo más rápido o ejecutando llamadas al modelo en paralelo.

**Costos:** ¿Cuál es el gasto por ejecución del agente? Los agentes de IA dependen de llamadas a LLM facturadas por token o APIs externas. El uso frecuente de herramientas o múltiples prompts puede aumentar rápidamente los costos. Por ejemplo, si un agente llama a un LLM cinco veces para una mejora marginal de calidad, debes evaluar si el costo está justificado o si podrías reducir el número de llamadas o usar un modelo más económico. El monitoreo en tiempo real también puede ayudar a identificar picos inesperados (por ejemplo, errores que causan bucles excesivos de API).

**Errores de Solicitud:** ¿Cuántas solicitudes falló el agente? Esto puede incluir errores de API o llamadas fallidas a herramientas. Para hacer que tu agente sea más robusto contra estos en producción, puedes configurar alternativas o reintentos. Por ejemplo, si el proveedor de LLM A está caído, cambias al proveedor de LLM B como respaldo.

**Retroalimentación del Usuario:** Implementar evaluaciones directas del usuario proporciona información valiosa. Esto puede incluir calificaciones explícitas (pulgar arriba 👍/abajo 👎, 1-5 estrellas ⭐) o comentarios textuales. La retroalimentación negativa consistente debe alertarte, ya que es una señal de que el agente no está funcionando como se esperaba.

**Retroalimentación Implícita del Usuario:** Los comportamientos del usuario proporcionan retroalimentación indirecta incluso sin calificaciones explícitas. Esto puede incluir reformulación inmediata de preguntas, consultas repetidas o hacer clic en un botón de reintento. Por ejemplo, si ves que los usuarios hacen repetidamente la misma pregunta, esto es una señal de que el agente no está funcionando como se esperaba.

**Precisión:** ¿Con qué frecuencia produce el agente resultados correctos o deseables? Las definiciones de precisión varían (por ejemplo, corrección en la resolución de problemas, precisión en la recuperación de información, satisfacción del usuario). El primer paso es definir cómo se ve el éxito para tu agente. Puedes rastrear la precisión mediante verificaciones automatizadas, puntuaciones de evaluación o etiquetas de finalización de tareas. Por ejemplo, marcar rastros como “exitosos” o “fallidos”.

**Métricas de Evaluación Automatizadas:** También puedes configurar evaluaciones automatizadas. Por ejemplo, puedes usar un LLM para puntuar la salida del agente, por ejemplo, si es útil, precisa o no. También hay varias bibliotecas de código abierto que te ayudan a puntuar diferentes aspectos del agente. Por ejemplo, [RAGAS](https://docs.ragas.io/) para agentes RAG o [LLM Guard](https://llm-guard.com/) para detectar lenguaje dañino o inyección de prompts.

En la práctica, una combinación de estas métricas proporciona la mejor cobertura de la salud de un agente de IA. 
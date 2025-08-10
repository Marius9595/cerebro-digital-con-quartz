---
curso: "[[Agents Course]]"
bloque: "U2 Bonus: ¿Qué es la observabilidad y evaluación de agentes?"
orden: "2"
tags: 
num_veces_leida: 0
---

## ¿Qué es?

La [[Observabilidad en Agentes IA]] nos proporciona métricas, pero la evaluación es el proceso de analizar esos datos (y realizar pruebas) para determinar qué tan bien está funcionando un agente de IA y cómo se puede mejorar.

## ¿Por qué es importante?

los agentes de IA a menudo son no deterministas y pueden evolucionar (a través de actualizaciones o comportamiento cambiante del modelo) - sin evaluación, no sabrías si tu “agente inteligente” está realmente haciendo bien su trabajo o si ha retrocedido.

## Categorías 

En la práctica, la evaluación exitosa de agentes de IA combina métodos **en línea** y **fuera de línea**. Podrías ejecutar puntos de referencia fuera de línea regulares para puntuar cuantitativamente a tu agente en tareas definidas y monitorear continuamente el uso en vivo para detectar cosas que los puntos de referencia pasan por alto. Combinar ambos proporciona una imagen más robusta.

De hecho, muchos equipos adoptan un ciclo: _evaluación fuera de línea → implementar nueva versión del agente → monitorear métricas en línea y recopilar nuevos ejemplos de fallos → agregar esos ejemplos al conjunto de prueba fuera de línea → iterar_. De esta manera, la evaluación es continua y siempre mejorando.

* **Evaluación Fuera de Línea** : 
	implica evaluar al agente en un entorno controlado, típicamente utilizando conjuntos de datos de prueba, no consultas de usuarios en vivo. Utilizas conjuntos de datos curados donde sabes cuál es la salida esperada o el comportamiento correcto, y luego ejecutas tu agente en ellos. A menudo se realiza durante el desarrollo (y puede ser parte de los pipelines de CI/CD) para verificar mejoras o proteger contra regresiones. El beneficio es que es **repetible y puedes obtener métricas claras de precisión ya que tienes la verdad fundamental**. También podrías simular consultas de usuarios y medir las respuestas del agente contra respuestas ideales o usar métricas automatizadas como se describió anteriormente.

	El desafío clave con la evaluación fuera de línea es asegurar que tu conjunto de datos de prueba sea completo y se mantenga relevante - el agente podría funcionar bien en un conjunto de prueba fijo pero encontrar consultas muy diferentes en producción. Por lo tanto, debes mantener los conjuntos de prueba actualizados con nuevos casos extremos y ejemplos que reflejen escenarios del mundo real. Una mezcla de pequeños casos de “prueba de humo” y conjuntos de evaluación más grandes es útil: conjuntos pequeños para verificaciones rápidas y más grandes para métricas de rendimiento más amplias.

* **Evaluación en Línea**: 
	Esto se refiere a evaluar al agente en un entorno en vivo y del mundo real, es decir, durante el uso real en producción. La evaluación en línea implica monitorear el rendimiento del agente en interacciones reales con usuarios y analizar los resultados continuamente.

	La ventaja de la evaluación en línea es que **captura cosas que podrías no anticipar en un entorno de laboratorio** - puedes observar la deriva del modelo con el tiempo (si la efectividad del agente se degrada a medida que cambian los patrones de entrada) y detectar consultas o situaciones inesperadas que no estaban en tus datos de prueba. Proporciona una imagen verdadera de cómo se comporta el agente en el mundo real.

	La evaluación en línea a menudo implica recopilar retroalimentación implícita y explícita del usuario, como se discutió, y posiblemente ejecutar pruebas sombra o pruebas A/B (donde una nueva versión del agente se ejecuta en paralelo para comparar con la antigua). El desafío es que puede ser complicado obtener etiquetas o puntuaciones confiables para interacciones en vivo - podrías depender de la retroalimentación del usuario o métricas posteriores (como si el usuario hizo clic en el resultado).
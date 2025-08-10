---
curso: "[[Agents Course]]"
bloque: "U1:  ¿Qué son los LLMs?"
orden: "5"
tags: 
num_veces_leida: 0
aliases:
  - Predicción del siguiente token
---
## ¿Cómo es?

 Un [[Modelo de Lenguaje Grande|LLM]] toma un texto de entrada y lo [[Token]]iza. Luego calcula una representación de la secuencia que captura información sobre el significado y la posición de cada token en la secuencia de entrada. Esta representación va al modelo, que produce puntuaciones que clasifican la probabilidad de cada token en su vocabulario de ser el siguiente en la secuencia. Basándonos en estas puntuaciones, tenemos múltiples estrategias para seleccionar los tokens para completar la oración.

 La estrategia de decodificación más sencilla sería tomar siempre el token con la puntuación máxima. 
 
![[DecodingFinal.gif]]

Pero hay estrategias de decodificación más avanzadas. Por ejemplo, _beam search_ explora múltiples secuencias candidatas para encontrar aquella con la puntuación total máxima–incluso si algunos tokens individuales tienen puntuaciones más bajas.

El proceso es un ciclo de naturaleza autoregressiva, es decir  **la salida de un paso se convierte en la entrada para el siguiente**. Este ciclo continúa hasta que el modelo predice que el siguiente token será el token EOS, momento en el cual el modelo puede detenerse:

![[AutoregressionSchema.gif]]
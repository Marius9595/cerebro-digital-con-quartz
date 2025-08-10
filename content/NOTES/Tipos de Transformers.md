---
curso: "[[Agents Course]]"
bloque: "U1:  ¿Qué son los LLMs?"
orden: "2"
tags: 
num_veces_leida: 0
---

## ¿Cuáles son?

1. **Codificadores (Encoders)**  
    Un Transformer basado en codificador toma texto (u otros datos) como entrada y produce una representación densa (o embedding) de ese texto.
    - **Casos de uso**: Clasificación de texto, búsqueda semántica, Reconocimiento de Entidades Nombradas
    - **Tamaño típico**: Millones de parámetros
2. **Decodificadores (Decoders)**  
    Un Transformer basado en decodificador se enfoca **en generar nuevos tokens para completar una secuencia, un token a la vez**.
    - **Casos de uso**: Generación de texto, chatbots, generación de código
    - **Tamaño típico**: Miles de millones de parámetros
3. **Seq2Seq (Codificador–Decodificador)**  
    Un Transformer de secuencia a secuencia _combina_ un codificador y un decodificador. El codificador primero procesa la secuencia de entrada en una representación contextual, luego el decodificador genera una secuencia de salida.
    - **Casos de uso**: Traducción, Resumen, Parafraseo
    - **Tamaño típico**: Millones de parámetros
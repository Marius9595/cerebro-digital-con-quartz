---
curso: "[[Agents Course]]"
bloque: "U1:  Mensajes y tokens especiales"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué son?

Son un "puente" **entre los mensajes conversacionales ( usuario y asistente) y los requisitos de formato específicos** de tu [[Modelo de Lenguaje Grande|LLM]] elegido.

En otras palabras, estructuran la comunicación entre el usuario y el agente, asegurando que cada modelo—a pesar de sus [[Tokens especiales]] únicos—reciba el prompt correctamente formateado. Así como cada [[Modelo de Lenguaje Grande|LLM]]  usa su propio [[Token]] EOS (End Of Sequence), también usan diferentes reglas de formato y delimitadores para los mensajes en la conversación.

Ejemplo:
``` python
system_message = {
    "role": "system",
    "content": "Eres un agente de servicio al cliente profesional. Siempre sé educado, claro y servicial."
}
```

Por tanto, son esenciales para **estructurar conversaciones entre modelos de lenguaje y usuarios**. Guían cómo se formatean los intercambios de mensajes en un único prompt (siempre concatenamos todos los mensajes de la conversación y los pasamos al LLM como una única secuencia independiente.)

Ejemplo para usar Llama 3.2:
```
<|begin_of_text|><|start_header_id|>system<|end_header_id|>

Fecha de corte de conocimiento: Diciembre 2023
Fecha actual: 10 Feb 2025

<|eot_id|><|start_header_id|>user<|end_header_id|>

Necesito ayuda con mi pedido<|eot_id|><|start_header_id|>assistant<|end_header_id|>

Estaré encantado de ayudarte. ¿Podrías proporcionar tu número de pedido?<|eot_id|><|start_header_id|>user<|end_header_id|>

Es PEDIDO-123<|eot_id|><|start_header_id|>assistant<|end_header_id|>
```
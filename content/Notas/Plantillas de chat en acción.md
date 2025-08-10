---
curso: "[[Agents Course]]"
bloque: "U1:  Mensajes y tokens especiales"
orden: "5"
tags: 
num_veces_leida: 0
---
## Ejemplo

A continuación se muestra una versión simplificada de la plantilla de chat de `SmolLM2-135M-Instruct`:

```python
{% for message in messages %}
{% if loop.first and messages[0]['role'] != 'system' %}
<|im_start|>system
Eres un asistente de IA útil llamado SmolLM, entrenado por Hugging Face
<|im_end|>
{% endif %}
<|im_start|>{{ message['role'] }}
{{ message['content'] }}<|im_end|>
{% endfor %}
```

Como puedes ver, un chat_template describe cómo se formateará la lista de mensajes.

Dados estos mensajes:

``` python
messages = [
    {"role": "system", "content": "Eres un asistente útil enfocado en temas técnicos."},
    {"role": "user", "content": "¿Puedes explicar qué es una plantilla de chat?"},
    {"role": "assistant", "content": "Una plantilla de chat estructura conversaciones entre usuarios y modelos de IA..."},
    {"role": "user", "content": "¿Cómo la uso?"},
]
```

La plantilla de chat anterior producirá la siguiente cadena:

```
<|im_start|>system
Eres un asistente útil enfocado en temas técnicos.<|im_end|>
<|im_start|>user
¿Puedes explicar qué es una plantilla de chat?<|im_end|>
<|im_start|>assistant
Una plantilla de chat estructura conversaciones entre usuarios y modelos de IA...<|im_end|>
<|im_start|>user
¿Cómo la uso?<|im_end|>
```

La libreria `transformers` se encargará de las plantillas de chat por ti como parte del proceso de tokenización. Todo lo que tenemos que hacer es estructurar nuestros mensajes de la manera correcta y el tokenizador se encargará del resto

En código sería lo siguiente a ejecutar:

```python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("HuggingFaceTB/SmolLM2-1.7B-Instruct")
rendered_prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
```




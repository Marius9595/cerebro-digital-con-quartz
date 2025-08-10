---
curso: "[[Agents Course]]"
bloque: "U1:  Mensajes y tokens especiales"
orden: "4"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Es Un [[Modelo base]] ajustado específicamente para seguir instrucciones y participar en conversaciones.

## ¿Cómo conseguimos que un modelo base se ajuste a esto?

Para hacer que un [[Modelo base]] se comporte como un modelo de instrucción, necesitamos **formatear nuestros prompts de manera consistente para que el modelo pueda entenderlos**.

En este punto entran en juego las [[Plantillas de chat]]. Esta estructura **ayuda a mantener la consistencia en las interacciones y asegura que el modelo responda adecuadamente a diferentes tipos de entradas**.

Una práctica estándar es el uso del formato de plantilla ChatML ( lista de mensajes JSON) que estructura conversaciones con indicadores claros de roles (sistema, usuario, asistente)

Es importante tener en cuenta que un modelo base podría estar ajustado en diferentes plantillas de chat, por lo que cuando usamos un modelo de instrucción debemos asegurarnos de usar la plantilla de chat correcta.
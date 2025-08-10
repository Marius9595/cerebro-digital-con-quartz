---
curso: "[[MCP Course]]"
bloque: "U1: Architectural Components"
orden: "2"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

JSON-RPC es un protocolo ligero de llamada a procedimiento remoto codificado en JSON, lo que lo hace:
- Legible para los humanos y fácil de depurar
- Independiente del lenguaje, permitiendo su implementación en cualquier entorno de programación
- Bien establecido, con especificaciones claras y adopción generalizada

Este protocolo define tres tipos de mensajes:

* **Requests**
	Enviado del Cliente al Servidor para iniciar una operación. Un mensaje de Solicitud incluye:
	
	- Un identificador único (`id`)
	- El nombre del método a invocar (por ejemplo, `tools/call`)
	- Parámetros para el método (si los hay)
	
- **Responses**
	Enviado del Servidor al Cliente en respuesta a una Solicitud. Un mensaje de Respuesta incluye:
	
	- El mismo `id` que la Solicitud correspondiente
	- Un `result` (para éxito) o un `error` (para fallo)
	
- **Notifications**
	One-way messages that don’t require a response. Typically sent from Server to Client to provide updates or notifications about events.

![[Pasted image 20250720154427.png]]
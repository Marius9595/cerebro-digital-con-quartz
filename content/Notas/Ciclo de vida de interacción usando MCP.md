---
curso: "[[MCP Course]]"
bloque: "U1: Architectural Components"
orden: "5"
tags: 
num_veces_leida: 0
---
## ¿Cómo es?

Los [[Model Context Protocol|MCP]] para la comunicación entre cliente y servidor utilizan [[JSON-RPC]] 2.0 y alguno de los dos siguientes mecanismos de transporte:
* [[Mecanismo de transporte HTTP + SSE]]
* [[Mecanismo de transporte Standard Input-Output]]

El protocolo MCP define un ciclo de vida estructurado de interacción entre Clientes y Servidores:

1.**Inicialización**

El Cliente se conecta al Servidor y ambos intercambian versiones del protocolo y capacidades; el Servidor responde con la versión del protocolo y capacidades que soporta.

|   |   |   |
|---|---|---|
|💻|→  <br>initialize|🌐|
|💻|←  <br>response|🌐|
|💻|→  <br>initialized|🌐|

El Cliente confirma que la inicialización está completa mediante un mensaje de notificación.

2.**Descubrimiento**

El Cliente solicita información sobre las capacidades disponibles y el Servidor responde con una lista de herramientas disponibles.

|   |   |   |
|---|---|---|
|💻|→  <br>tools/list|🌐|
|💻|←  <br>response|🌐|

Este proceso puede repetirse para cada herramienta, recurso o tipo de solicitud.

3.**Ejecución**
El Cliente invoca capacidades según las necesidades del Host.

|   |   |   |
|---|---|---|
|💻|→  <br>tools/call|🌐|
|💻|←  <br>notification (progreso opcional)|🌐|
|💻|←  <br>response|🌐|

4.**Terminación**

La conexión se cierra de manera ordenada cuando ya no es necesaria y el Servidor confirma la solicitud de cierre.

|   |   |   |
|---|---|---|
|💻|→  <br>shutdown|🌐|
|💻|←  <br>response|🌐|
|💻|→  <br>exit|🌐|

El Cliente envía el mensaje final de salida para completar la terminación.
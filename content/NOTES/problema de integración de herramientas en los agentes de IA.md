---
curso: "[[MCP Course]]"
bloque: "U1: Key Concepts and Terminology"
orden: "2"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

El **Problema de Integración M×N** se refiere al desafío de conectar M aplicaciones de inteligencia artificial diferentes con N herramientas externas o fuentes de datos distintas sin un enfoque estandarizado. Esto hace que los desarrolladores tengan que crear M×N integraciones personalizadas—una para cada posible combinación de una aplicación de IA con una capacidad externa.

![[Pasted image 20250720152550.png]]

Cada aplicación de IA tendría que integrarse individualmente con cada herramienta o fuente de datos. Este es un proceso muy complejo y costoso que introduce mucha fricción para los desarrolladores y altos costos de mantenimiento. Una vez que tenemos múltiples modelos y múltiples herramientas, la cantidad de integraciones se vuelve demasiado grande para gestionar, cada una con su propia interfaz única.

![[Pasted image 20250720152633.png]]

## ¿Cómo podemos resolverlo?

[[Model Context Protocol|MCP]] transforma  esto en un problema M+N al proporcionar una interfaz estándar: cada aplicación de IA implementa una vez el lado cliente de MCP, y cada herramienta/fuente de datos implementa una vez el lado servidor. Esto reduce drásticamente la complejidad de la integración y la carga de mantenimiento.

![[Pasted image 20250720152756.png]]
Cada aplicación de IA implementa una vez el lado cliente de MCP, y cada herramienta/fuente de datos implementa una vez el lado servidor.
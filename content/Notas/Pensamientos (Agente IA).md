---
curso: "[[Agents Course]]"
bloque: "U1: Pensamiento Interno y el Enfoque Re-Act"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Representan los **procesos internos de razonamiento y planificación del Agente** para resolver la tarea. Esto utiliza la capacidad del Modelo de Lenguaje Grande (LLM) del agente **para analizar información cuando se presenta en su prompt**.

Piensalo como el diálogo interno del agente, donde considera la tarea en cuestión y forma la estrategia de su enfoque.

Los pensamientos del Agente son responsables de acceder a las observaciones actuales y decidir cuál(es) debería(n) ser la(s) siguiente(s) acción(es). A través de este proceso, el agente puede **desglosar problemas complejos en pasos más pequeños y manejables**, reflexionar sobre experiencias pasadas y ajustar continuamente sus planes basándose en nueva información.

## Tipos

|Tipo de Pensamiento|Ejemplo|
|---|---|
|Planificación|“Necesito dividir esta tarea en tres pasos: 1) recopilar datos, 2) analizar tendencias, 3) generar informe”|
|Análisis|“Basado en el mensaje de error, el problema parece estar en los parámetros de conexión de la base de datos”|
|Toma de Decisiones|“Dadas las restricciones presupuestarias del usuario, debería recomendar la opción de nivel medio”|
|Resolución de Problemas|“Para optimizar este código, primero debería perfilarlo para identificar cuellos de botella”|
|Integración de Memoria|“El usuario mencionó su preferencia por Python anteriormente, así que proporcionaré ejemplos en Python”|
|Auto-reflexión|“Mi último enfoque no funcionó bien, debería probar una estrategia diferente”|
|Establecimiento de Objetivos|“Para completar esta tarea, primero necesito establecer los criterios de aceptación”|
|Priorización|“La vulnerabilidad de seguridad debe abordarse antes de agregar nuevas características”|
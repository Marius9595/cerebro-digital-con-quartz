---
curso: "[[MCP Course]]"
bloque: "U1: Understanding MCP Capabilities"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Cuáles son?

### Herramientas

Las herramientas son funciones o acciones ejecutables que el modelo de IA como un [[Modelo de Lenguaje Grande|LLM]] puede invocar a través del protocolo MCP.

- **Control**: Las herramientas suelen ser **controladas por el modelo**, lo que significa que el modelo de IA (LLM) decide cuándo llamarlas según la solicitud y el contexto del usuario.
- **Seguridad**: Debido a su capacidad para realizar acciones con efectos secundarios, la ejecución de herramientas puede ser peligrosa. Por lo tanto, normalmente requieren la aprobación explícita del usuario.
- **Casos de uso**: Envío de mensajes, creación de tickets, consultas a APIs, realización de cálculos.

### Recursos

Los recursos proporcionan acceso de solo lectura a fuentes de datos, permitiendo que el modelo de IA recupere contexto sin ejecutar lógica compleja.

- **Control**: Los recursos son **controlados por la aplicación**, lo que significa que la aplicación anfitriona suele decidir cuándo acceder a ellos.
- **Naturaleza**: Están diseñados para la recuperación de datos con un cálculo mínimo, similar a los endpoints GET en las APIs REST.
- **Seguridad**: Al ser de solo lectura, normalmente presentan menores riesgos de seguridad que las Herramientas.
- **Casos de uso**: Acceso a contenidos de archivos, recuperación de registros de bases de datos, lectura de información de configuración.

## Prompts

Los prompts son plantillas o flujos de trabajo predefinidos que guían la interacción entre el usuario, el modelo de IA y las capacidades del Servidor.

- **Control**: Los prompts son **controlados por el usuario**, y a menudo se presentan como opciones en la interfaz de usuario de la aplicación anfitriona.
- **Propósito**: Estructuran las interacciones para un uso óptimo de las Herramientas y Recursos disponibles.
- **Selección**: Los usuarios suelen seleccionar un prompt antes de que el modelo de IA comience a procesar, estableciendo el contexto para la interacción.
- **Casos de uso**: Flujos de trabajo comunes, plantillas de tareas especializadas, interacciones guiadas.

## Sampling

El muestreo permite que los Servidores soliciten al Cliente (específicamente, a la aplicación anfitriona) que realice interacciones con el LLM.

- **Control**: El muestreo es **iniciado por el servidor**, pero requiere la facilitación del Cliente/Anfitrión.
- **Propósito**: Permite comportamientos agénticos impulsados por el servidor y, potencialmente, interacciones recursivas o de varios pasos.
- **Seguridad**: Al igual que las Herramientas, las operaciones de muestreo normalmente requieren la aprobación del usuario.
- **Casos de uso**: Tareas complejas de varios pasos, flujos de trabajo de agentes autónomos, procesos interactivos.

El flujo de muestreo sigue estos pasos:

1. El servidor envía una solicitud `sampling/createMessage` al cliente.
2. El cliente revisa la solicitud y puede modificarla.
3. El cliente realiza el muestreo desde un LLM.
4. El cliente revisa la respuesta generada.
5. El cliente devuelve el resultado al servidor.

Este diseño con intervención humana garantiza que los usuarios mantengan el control sobre lo que el LLM ve y genera. Al implementar el muestreo, es importante proporcionar indicaciones claras y bien estructuradas, así como incluir el contexto relevante.
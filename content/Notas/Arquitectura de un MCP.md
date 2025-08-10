---
curso: "[[MCP Course]]"
bloque: "U1: Architectural Components"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Cómo es?

El Protocolo de Contexto de Modelo (MCP) está basado en una arquitectura cliente-servidor que permite una comunicación estructurada entre modelos de IA y sistemas externos.

Una ventaja clave de esta arquitectura es su modularidad. Un solo **Host** puede conectarse a múltiples **Servers** simultáneamente a través de diferentes **Clients**. Se pueden agregar nuevos **Servers** al ecosistema sin necesidad de realizar cambios en los **Hosts** existentes. Las capacidades pueden componerse fácilmente entre diferentes **Servers**.

La arquitectura MCP consta de tres componentes principales:

* **Host** 
	El **Host** es la aplicación de IA orientada al usuario con la que los usuarios finales interactúan directamente.
	
	Las responsabilidades del Host incluyen:
	- Gestionar las interacciones y permisos de los usuarios
	- Iniciar conexiones a los servidores MCP a través de los clientes MCP
	- Orquestar el flujo general entre las solicitudes de los usuarios, el procesamiento del LLM y las herramientas externas
	- Presentar los resultados a los usuarios en un formato coherente

	En la mayoría de los casos, los usuarios seleccionarán su aplicación host según sus necesidades y preferencias.

	Ejemplos son:
	* AI Chat apps like OpenAI ChatGPT or Anthropic’s Claude Desktop
	- AI-enhanced IDEs like Cursor, or integrations to tools like Continue.dev
	- Custom AI agents and applications built in libraries like LangChain or smolagents


* **Cliente**
	El **Cliente** es un componente dentro de la aplicación Host que gestiona la comunicación con un Servidor MCP específico. Sus características principales incluyen:
	- Cada Cliente mantiene una conexión 1:1 con un solo Servidor
	- Maneja los detalles a nivel de protocolo de la comunicación MCP
	- Actúa como intermediario entre la lógica del Host y el Servidor externo

* **Servidor**
	El **Servidor** es un programa o servicio externo que expone capacidades a los modelos de IA a través del protocolo MCP. Los servidores:
	- Proporcionan acceso a herramientas externas, fuentes de datos o servicios específicos
	- Actúan como envoltorios ligeros alrededor de funcionalidades existentes
	- Pueden ejecutarse localmente (en la misma máquina que el Host) o de forma remota (a través de una red)
	- Exponen sus capacidades en un formato estandarizado que los Clientes pueden descubrir y utilizar

Esto puede parecer sencillo, pero su poder radica en la estandarización del protocolo de comunicación y la clara separación de responsabilidades entre los componentes. Este diseño permite un ecosistema cohesivo donde los modelos de IA pueden conectarse sin problemas con una variedad cada vez mayor de herramientas externas y fuentes de datos.

## Ejemplo de flujo de comunicación entre los componentes

1. **Interacción del usuario**: El usuario interactúa con la aplicación **Host**, expresando una intención o consulta.

2. **Procesamiento del Host**: El **Host** procesa la entrada del usuario, utilizando potencialmente un LLM para comprender la solicitud y determinar qué capacidades externas podrían ser necesarias.

3. **Conexión del Cliente**: El **Host** indica a su componente **Client** que se conecte al(los) **Server(s)** apropiado(s).

4. **Descubrimiento de capacidades**: El **Client** consulta al **Server** para descubrir qué capacidades (Herramientas, Recursos, Prompts) ofrece.

5. **Invocación de capacidades**: Según las necesidades del usuario o la determinación del LLM, el Host instruye al **Client** para invocar capacidades específicas del **Server**.

6. **Ejecución en el Servidor**: El **Server** ejecuta la funcionalidad solicitada y devuelve los resultados al **Client**.

7. **Integración de resultados**: El **Client** transmite estos resultados de vuelta al **Host**, que los incorpora al contexto para el LLM o los presenta directamente al usuario.
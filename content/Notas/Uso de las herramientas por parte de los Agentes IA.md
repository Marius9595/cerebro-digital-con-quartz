---
curso: "[[Agents Course]]"
bloque: "U1:  ¿Qué son las Herramientas?"
orden: "2"
tags: 
num_veces_leida: 0
---
## ¿Cómo es?

Dado que un [[Modelo de Lenguaje Grande|LLM]] solo puede recibir entradas de texto y generar salidas de texto, no tienen forma de llamar a herramientas por sí mismos. Por tanto, a nivel programático hay que hacer lo siguiente:

1.  "enseñarle/mostrarle" que herramientas hay disponibles para que ante una instrucción "elija" y genere el "código" para señalar que necesita invocar X herramienta.  Esto para que funcione requiere mucha precisión y exactitud sobre la siguiente información de la herramienta:
	* **Lo que hace la herramienta** (descripción textual es _lo que queremos que el LLM sepa sobre la herramienta_)
	* **Qué entradas exactas espera**

	Si queremos proporcionar herramientas adicionales, debemos ser consistentes y siempre usar el mismo formato. Este proceso puede ser frágil, y podríamos pasar por alto accidentalmente algunos detalles.

	 Ya sea por lenguaje (uso del toString o decoradores) o librerías, este formateo se simplificamente notoriamente permitiendo esa consistencia necesaria:
		
	```python
	@tool
	def calculadora(a: int, b: int) -> int:
	    """Multiplica dos enteros."""
	    return a * b
	
	print(calculadora.to_string()) // linea naranja imagen					
	```
		
	 ![[Pasted image 20250719191849.png]]

2. Procesar la "decisión" del [[Modelo de Lenguaje Grande|LLM]]  para reconocer que se requiere una llamada a una herramienta e invocar la herramienta en nombre del [[Modelo de Lenguaje Grande|LLM]]. 

3. La salida de la herramienta luego se enviará de vuelta al [[Modelo de Lenguaje Grande|LLM]], que compondrá su respuesta final para el usuario.

> La salida de una llamada a una herramienta es otro tipo de mensaje en la conversación. Los pasos de llamada a herramientas típicamente no se muestran al usuario: el Agente recupera la conversación, llama a la(s) herramienta(s), obtiene las salidas, las agrega como un nuevo mensaje de conversación y envía la conversación actualizada al LLM nuevamente. Desde el punto de vista del usuario, es como si el LLM hubiera usado la herramienta, pero de hecho fue nuestro código de aplicación (el **Agente**) quien lo hizo.
---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 1-The Disciplines
paginas: "132"
tags:
  - TDD
  - Testing
  - Patrón
---
## ¿Qué es?

Es un patrón que fue identificado por [[Bill Wake]] en los tests. este consiste en dividir el cuerpo de los test en tres partes:

* **Arrange**: Aquí se organizan los datos que se van a probar.  Esto se hace normalmente en un método Setup, o al principio de la función de prueba. El propósito es poner el sistema en el estado necesario para ejecutar la prueba.
* **Act**: Es el punto donde la prueba llama a la función, o realiza la acción, o invoca de alguna otra forma al procedimiento que es el objetivo de la prueba. 
* **Assert**: Por lo general, se produce la observación de la salida del acto para asegurarse de que el sistema se encuentra en el nuevo estado deseado. 
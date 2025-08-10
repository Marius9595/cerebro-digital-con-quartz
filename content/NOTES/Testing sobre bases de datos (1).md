---
libro: "[[Clean Craftsmanship Disciplines, Standards and Ethics]]"
capítulo: 2-Test Design
paginas: 174-176
tags:
  - Testing
  - Dobles-de-Test
  - Enfoque
---
## ¿Cómo lo propone el autor?

El tajante, no debemos testear las bases de datos, demos asumir que funcionan y que lo que debemos testear son las queries o los comandos enviados a la base de datos. De esta manera, se evita usar reglas de negocio. Es decir, el testing queda desacoplado. Para ello propone usar una interfaz llamada [[Gateway (1)]] (Martin Fowler, Patterns of Enterprise Application Architecture (Addison-Wesley, 2003), 466. TODO).

En la interfaz Gateway se declaran todos los comandos y queries que necesitamos que se realicen. No necesariamente todas las operaciones tienen que estar bajo esta interfaz, puede segregarse en función de particiones de la base de datos.  Luego las implementaciones, se encargan de crear y dirige a la base de datos en concreto esos procesos que se desean ejecutar.

Lo único que debemos saber desde capas de dominio es que este elemento construirá los elementos de dominio y que destructurá para que puedan ser procesados, no debería haber conocimiento de cómo se hace esto.

Bajo este marco, se puede crear una base de datos de prueba, se comprueba que la implementación x realiza las acciones cómo se espera: devuelve elementos de dominio, se observan efectos esperados (se eliminan y actualizan datos) en la base de datos... etc. Esta base de datos de prueba se crea con las filas suficientes para demostrar que los tests funcionan y, a continuación, se hace una copia de seguridad de esa base de datos. Antes de ejecutar los tests, hay que restaurar esa copia de seguridad para que los tests se ejecuten siempre con los mismos datos de prueba.  

Cuando se quiera testear las reglas de negocio, mejor utilizar stubs y spies para reemplazar las clases GatewayImpl. No pruebe las reglas de negocio con la base de datos real conectada. Esto es lento y propenso a errores. En su lugar, pruebe que sus reglas de negocio e interactores manipulan las interfaces de Gateway correctamente. 


## Mi opinión
Ciertamente, es algo que práctico creo desde el punto de vista de [[DDD no depende de una arquitectura o patrón de arquitectura concreto, la elección de estas deben estar orientadas solo a satisface los requerimientos de calidad de software y estas no pueden ser determinadas sin los requisitos funcionales]] con el patrón repository (siendo el "sinonimo" de Gateway). A mi sinceramente me gusta más crear una implementación de [[Fake Object]] testeado y que este sea utilizado en las pruebas de negocio. Pero concuerdo con la separación y testear de que ese elemento descoplante esté haciendo esa traducción entre objetos de dominio y queries o commandos hacia base de datos

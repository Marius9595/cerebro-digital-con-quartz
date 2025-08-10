---
charla: "[[The Power of Composition]]"
minutoInicio: "2.50"
minutoFin: "17.17"
tags: 
num_veces_leida: 0
---
## ¿Cúal es?
Para aplicar composición de funciones, estas deben seguir la siguiente guía de diseño:

* Todas las funciones deben estar diseñadas para ser conectadas. De esta manera, no debería ser necesario usar patrones como el adapter.
* Las funciones son reusables en diferentes contextos. Esto funciona por que cada función es autocontenida o independientes
* Al conectar dos o más funciones, la resultante función debe ser también conectable. Esto permite una composición sin límites

## ¿Por qué es importante

Con esta guía se puede, desde funciones pequeñas, ir contruyendo piezas cada vez más grandes hasta tener una aplicación web. Empezando desde operaciones de bajo nivel, componer estas para crear servicios, combinando servicios crear un caso de uso, y con un dispatcher o controllador elegir que caso de uso ejecutar a modo de workflow. Lo importante es que todas las funciones creadas, son creadas por medio de la guía mencionada, así de simple

Además, por compleja que sea la aplicación, los datos fluyen siempre solo en una dirección
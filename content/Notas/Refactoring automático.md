---
curso: "[[Refactoring sostenible]]"
bloque: 6. Estrategias de Refactoring
orden: "6.2"
tags:
  - Refactoring
num_veces_leida: 0
---
## ¿Qué es?
Los IDE tienen incorporado herramientas de refactorización que nos permiten automatizar la transformación de código.  Están inspirados en el libro de Martin Fowler. Apoyarnos en estas nos permiten ganar en productividad.

Las opciones de refactors automatizados dependen del lenguaje
## Ventajas

* Automáticos
* Nos permiten ejecutarlos sin necesidad de tests para saber que nos hemos roto nada pues no cambian el comportamiento del código de forma testada.

## Los más importantes

Estos importantes y básicos se construyen los demás:

* **Rename**: Cambia el nombre de clases, métodos, variables...
* **Extract**: Crea una nueva abstracción
* **Inline**: Es lo contrario a extract, elimina una abstracción
* **Move**: Mueve un artefacto a algún otro módulo del proyecto
* **Save delete**: Elimina el código y sus referencias de forma segura
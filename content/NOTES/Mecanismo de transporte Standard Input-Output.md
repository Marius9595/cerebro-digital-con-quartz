---
curso: "[[MCP Course]]"
bloque: "U1: Architectural Components"
orden: "3"
tags: 
num_veces_leida: 0
aliases:
  - stdio
---
## ¿Qué es?

El transporte stdio se utiliza para la comunicación local, donde el Cliente y el Servidor se ejecutan en la misma máquina:

La aplicación Host inicia el Servidor como un subproceso y se comunica con él escribiendo en su entrada estándar (stdin) y leyendo de su salida estándar (stdout).

**Casos de uso** para este transporte son herramientas locales como el acceso al sistema de archivos o la ejecución de scripts locales.

Las principales **ventajas** de este transporte son que es sencillo, no requiere configuración de red y está protegido de forma segura por el sistema operativo.
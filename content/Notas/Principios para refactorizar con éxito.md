---
curso: "[[Refactoring sostenible]]"
bloque: 6. Estrategias de Refactoring
orden: "6.1"
tags:
  - Refactoring
  - Principios
num_veces_leida: 0
---
## ¿Cuáles son?

* Los tests automáticos son nuestra red de seguridad. Nos permitirán saber si en algún momento se ha roto la/s funcionalidad/es. 
* Realiza el proceso de refactorización en pequeños pasos (baby steps). Lo ideal es apoyarse con un control de versiones. 
* Evita [[Refactorizar]] mientras añades nuevas funcionalidades o corriges bugs. Esto es porque: 1) los humanos no somos buenos haciendo más de una cosa a la vez y 2) Podemos romper nuestra red de seguridad o fuente de verdad (tests). Mientras se refactoriza los tests siempre tienen que pasar


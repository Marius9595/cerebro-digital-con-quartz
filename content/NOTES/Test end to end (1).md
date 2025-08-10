---
libro: "[[Growing Object-Oriented Software, Guided by tests]]"
capítulo: 1-What is the point of test-driven-development
paginas: 8-10
tags:
  - Testing
  - Definición
  - Software
  - TDD
aliases:
  - Test de Aceptación
---
## ¿Qué es?
Según [[Steve Freeman]] y [[Nat Pryce]], es el tipo de test que usan cómo guía para aplicar un [[Desarrollo de software iterativo-incremental (1)]] , por ello lo suelen llamar test de aceptación. Ellos lo entienden cómo un test que verifica el software end to end sin hacer una invocación directa del código desarrollado. Esto quiere decir, es que la ejecución se ejercita desde fuera de la aplicación, o sea desde una interfaz de usuario, servicios web... etc. De esta manera, se pone a prueba al sistema y la interacción con los sistemas externos. Es no es algo sencillo y conlleva riesgos y puede ser muy lento, por eso, dependiendo de la situación puede que se pueda justificar el ejercicio solo sobre objetos del dominio.

Ahora bien, aclaran que end to end también implica asegurar que el sistema se construye y se despliega. Es decir, hacen la aclaración de que debe haber una pipeline de CI/CD que creo que en ese momento no era una práctica extendida.
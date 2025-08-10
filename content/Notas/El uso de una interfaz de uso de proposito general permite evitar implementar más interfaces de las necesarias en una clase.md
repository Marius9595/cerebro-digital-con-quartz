---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 5-Entities
paginas: 196-197
tags:
  - DDD
num_veces_leida: 0
---
## ¿Cómo?
Dado que [[Los roles de una clase se determinan por medio de las interfaces que implementan]] se puede ir resolviendo similitudes y diferencias entre varios objetos usando esta perspectiva. Pero quizas implementar más de tres interfaces es una señal de que no es el mejor camino. Por ello, una forma de evitar que se implementa más de dos interfaces, es declarar una de propósito general, desde la cuál se creen subtipos o subinterfaces. Con esto, por medio de un mecanismo de delegación, en tiempo de ejecución se puede buscar un subtipo que pueda resolver el problema que se supone que puede resolverse bajo la interfaz de propósito general.

```java
```

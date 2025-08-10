---
curso: "[[Agents Course]]"
bloque: "U2:  Sistemas de agentes múltiples"
orden: "1"
tags: 
num_veces_leida: 0
---
## ¿Qué son?

Son sistemas donde **agentes especializados colaboran en tareas complejas**, mejorando la modularidad, escalabilidad y robustez. En lugar de depender de un solo agente, las tareas se distribuyen entre agentes con capacidades distintas. 

Los agentes especializados trabajan bajo la coordinación de un **Agente Orquestador** gestiona la delegación de tareas y la interacción. Este enfoque permite flujos de trabajo complejos distribuyendo tareas entre agentes con roles distintos.

Además, permiten separar memorias entre diferentes sub-tareas, con dos grandes beneficios:

- Cada agente está más enfocado en su tarea principal, por lo que es más performante
- Separar memorias reduce la cantidad de tokens de entrada en cada paso, reduciendo la latencia y el costo.
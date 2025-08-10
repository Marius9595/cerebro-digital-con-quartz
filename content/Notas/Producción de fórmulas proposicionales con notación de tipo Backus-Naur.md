---
libro: "[[Lógica y estructuras discretas 2024-2025]]"
capítulo: 1-Logica Proposicional
paginas: Generación de fórmulas proposicionales
tags: 
num_veces_leida: 0
---
## ¿Qué es?

Se trata de una presentación de cómo producir [[Fórmula Proposicional]]es  alternativa a las [[Reglas de generación de fórmulas proposicionales]].
  
![[Producción de fórmulas proposicionales con notación de tipo Backus-Naur.png]]

La F inicial, a la izquierda, indica que se va a producir una entidad de ese tipo F; en este caso, una fórmula proposicional. Y para ello se usa una y sólo una de las 8 opciones que se presentan, separadas por el carácter |. Así se produce por ejemplo p3 como ‘algo’ de tipo F, o p5 en otro proceso de producción, o ⊥.

Una opción como (F∧F) usa dos entidades, quizá distintas pero ambas de tipo F, para producir otra entidad de tipo F, la citada a la izquierda de ::=. Así, con las p3 y p5 previas se produciría (p3∧p5). Y esta nueva F se puede utilizar de nuevo en alguna de las opciones para producir otra fórmula más compleja.
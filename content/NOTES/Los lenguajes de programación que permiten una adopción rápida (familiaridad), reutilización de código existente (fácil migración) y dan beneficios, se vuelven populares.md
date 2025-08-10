---
video: "[[Why Isn't Functional Programming the Norm]]"
minutoInicio: 10:22
minutoFin: 13:14
tags: 
num_veces_leida: 0
---
## ¿Por qué?

Hay lenguajes que se han creado con vistas a atraer o ofrecer a comunidades una alternativa su lenguaje actual de una manera que sea fácil y/o también que les permita no tener que hacer una reescritura de sus proyectos. Todo con el argumento de que al hacer la migración tendrán grandes beneficios. En resumen, estos lenguajes tratan de aprovechar la familiaridad del desarrollador (reducción del coste de aprendizaje) y reducir las barreras de entrada.

Veamos cómo algunos lenguajes exitosos han utilizado esta estrategia:

• **CoffeeScript**: Uno de los primeros lenguajes en prosperar con esta filosofía.

   * Su eslogan era "es solo JavaScript".
   * Prometía que, si ya eras programador de JavaScript, podías aprenderlo en **aproximadamente media hora**.
   * Ofrecía scripts para **convertir automáticamente** tu código JavaScript existente a CoffeeScript, lo que minimizaba drásticamente el **esfuerzo de migración** y reforzaba la idea de que era "solo" JavaScript.
   * Esto fue suficiente para impulsarlo a ser el 11º lenguaje más popular en GitHub en su apogeo.

• **TypeScript**: Un ejemplo fuerte de esta estrategia.

 * Es un **superconjunto estricto de JavaScript**, lo que significa que el código JavaScript válido es, por definición, también código TypeScript válido.
 * La migración puede ser tan simple como **renombrar un archivo** **.js** **a** **.ts**, y "se supone que simplemente funciona". A partir de ahí, los desarrolladores pueden añadir incrementalmente las características de TypeScript.
 * Ofrece **beneficios** (como el tipado estático) con un **costo percibido mínimo** ("solo tienes que renombrar el archivo"), lo que ha llevado a que mucha gente lo adopte.

• **C++**:  El primer gran éxito de esta estrategia.

* Era un "casi superconjunto" de C.
* Permitió a los programadores de C tomar sus archivos `.c`, renombrarlos a `.cpp` y comenzar a acceder a los **beneficios adicionales** de C++. Esto facilitó una transición y adopción exitosa.

• **Kotlin**: Un ejemplo moderno que, aunque es un lenguaje "sustancialmente diferente" de Java, capitaliza la misma idea.

* Enfatiza su **"interoperabilidad del 100% con las bases de código Java existentes"** y la disponibilidad de scripts para **convertir Java a Kotlin**.
* Esto reduce el **esfuerzo de migración** y el riesgo percibido para las empresas y desarrolladores con grandes bases de código Java, contribuyendo a su gran éxito.
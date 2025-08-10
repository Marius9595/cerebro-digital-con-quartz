---
libro: 
capítulo: 
paginas: 
tags: 
num_veces_leida: 0
---
## ¿Cómo
Dado que [[Los roles de una clase se determinan por medio de las interfaces que implementan]], podemos tener dos objetos que juegen el papel de Persona pero otra que sea de Persona y User. De esta manera, si una implementa dos interfaces y la otra una, es posible alinear similitudes y destacar la diferencia.

```java

public interface User {  ...  }  

public interface Person {  ...  } 

public class HumanUser implements User, Person {  ...  } 
```

Sin embargo, esto puede complicar las cosas debido a que estas intefaces de por si sean complejas. Es decir, que la clase se muy compleja de implementar. Y Por otro lado, para satisfaces la demandas futuras de este estilo, se tendría que incrementar el número de interfaces a implementar, con lo cúal el objeto se vuelve también aún más complejo.
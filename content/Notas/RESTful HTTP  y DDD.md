---
libro: "[[Implementing Domain-Driven Design]]"
capítulo: 4-Architecture
paginas: 145-
tags:
  - DDD
  - REST
---
No es recomendable exponer directamente los modelos de dominio, pues deja interfaces frágiles. De esta manera, hay dos enfoques que se pueden aplicar para no caer en esta desventaja:

#### Crear un [[Bounded Context]] separado para la capa de interfaz del sistema y utilizar las estrategias  apropiadas  para acceder  al Dominio principal  real desde el modelo  de interfaz del sistema

Esto se considera un enfoque clásico, ya que considera la interfaz del sistema como un todo cohesivo que simplemente se expone  utilizando abstracciones  de recursos en lugar de servicios  o interfaces remotas


#### 
Another approach is appropriate when moreemphasis is placed on standard media types. If specific media  types are developed to support not only a singlesystem interface but a category of similarclient-server  interactions, a domain model can becreated to represent each standard media type. Such a domain model  might even bereused across clients and servers, although some REST and SOA proponents view this as an  anti-pattern. Note: Such an approach is essentially a Shared Kernel (3) or Published Language (3)  in DDD terms. 

Vaughn Vernon. Implementing Domain-Driven Design (Vaughn Vernon) (Z-Library) (p. 145). Kindle Edition. 

Which of thesetwo approaches is chosen depends to a large degree on the goals of thesystem designer in  terms of reusability. The morespecialized thesolution, the more useful thefirst approach turns out to be. The  more generally useful thesolution is, with theextremeend of thespectrum being standardization by an official  standards body, the moresenseit makes to go with thesecond, media-type-centric approach. 

Vaughn Vernon. Implementing Domain-Driven Design (Vaughn Vernon) (Z-Library) (p. 146). Kindle Edition. 
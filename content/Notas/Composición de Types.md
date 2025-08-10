---
charla: "[[The Power of Composition]]"
minutoInicio: "19.00"
minutoFin: "25.01"
tags: 
num_veces_leida: 0
---
## ¿Cómo es?

Para la composición se aplica el sistema de tipos algebraicos (componible). Para ello, solo es posible si el comportamiento está separado de los datos.

Para construir types "más grandes/complejos" se empieza desde types más simples/pequeños por medio de:

* Composición  con "AND"  (record)
	* es una agrupación de types en un objeto, record, struct...
*  Composición con "OR" (choice)
	* Es una elección entre diferentes opciones. una forma de hacerlo es usando enums


## ¿Por qué es interesante?
Esto permite generar una documentación que es ejecutable. Desde la declaración de types, su composición se puede inferir la definición de los elementos del negocio que están en juego y como se relacionan. Además al ser ligero, en un mismo fichero es fácil de inferir todo más directo


## ¿Cómo nombramos a los types?

Pueden ser sustantivos (valores) o verbos (funciones)

## Ejemplo

Caso de uso:
> Aceptamos tres formas de pago `Cash`, `Paypal` o `CreditCard`
>Para `Cash` no se necesita información adicional
>Para `Paypal` se necesita un correo electrónico
>Para `CreditCard` necesitamos saber el tipo de card y el card number

Implementación:

```Fsharp

type EmailAddress = string  // primite type
type CardNumber = string  // primite type

type CardType = Visa | MasterCard  // choice type (usando 2OR")

type CreditCardInfo = {    // Record Type (usando "AND")
	CardNumber: CardNumber
	CardType: CardType
}

type PaymentMethod =   // choice type (usando "OR")
	| Cash
	| Paypal of EmailAddres
	| Card of CreditCardInfo

type PaymentAmount = decimal  // primitive type
type Currency = EUR | USD | RUB // choice type (usando "OR")

type Payment = {  // record type (usando "AND")
	Amount: PaymentAmount
	Currency: Currency
	Method; PaymentMethod
}
```
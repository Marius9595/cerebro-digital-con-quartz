¿No te ha pasado que, cuando has estado debatiendo con alguien, hay cierta discrepancia por un entendimiento diferente sobre un concepto? Normalmente, esto dificulta una comunicación efectiva. En esta situación me he visto varias veces al desarrollar software aplicando Test-Driven-Development (TDD) o cuando simplemente hago testing. Hasta hace no mucho, solo veía una forma de categorizar los tests, pero la realidad es que existen más que facilitan un entendimiento más holístico y completo de lo que necesitamos resolver. Esto lo descubrí gracias a uno de los capítulos de “Diseño a la Gorra” de Hernán Wilkinson, y me ha permitido tener una mirada más amplia sobre los tests, y más importante, adquirir una perspectiva más pragmática a la hora de desarrollar guiado por tests. En este artículo, te presento un resumen del contenido de ese capítulo más impresiones personales.

<aside> 💡 Las categorías surgen de varios autores y sus definiciones pueden ser difusas, contradictorias o ambiguas. No hay un consenso total, por eso hay que cuestionarse y razonas lo que se propone

</aside>

<aside> 💡 No hay que perder de vista que un test pertenece a todo ese conjunto, no solo a uno, son visiones para facilitar el tratamiento desde un punto de vista

</aside>

## De acuerdo al alcance a nivel de “código”

Esta es la categoría más clásica y más extendida a la hora de hablar de tests, refiriéndose a cuanto código se está probando o elementos distinguibles. En esta podemos distinguir al menos dos tipos de test: **Tests unitarios** y **Tests de integración**. A continuación, vamos a analizar a qué nos referimos con estos.

### Tests unitarios

En la literatura, no hay una manera única de referirse estos:

<aside> 📖 XAuthor1X: “Test que verifica el comportamiento de una unidad”

</aside>

<aside> 📖 XAuthor2X: “Test que se ejecuta en menos de 10 ms”

</aside>

<aside> 📖 XAuthor3X: “Test que verifica el comportamiento de una unidad aislado de sus dependencias”

</aside>

<aside> 📖 XAuthor4X(michel feathers): “Test que comprueban funcionalidad que no es externa al sistema que tenemos bajo control”

</aside>

<aside> 📖 “Xauthor5X (freman): “Test sobre objetos que tenemos total control”

</aside>

De estas definiciones, cabe cuestionarse¿Qué es una unidad? ¿Es una función, un método, una clase, un conjunto de clases, un módulo? Esta ambigüedad es conflictiva y normalmente obliga a definir por equipos que se considera como unidad para estar alineados. Aún así, empiezan a ocurrir situaciones en cuáles lo que teníamos como una unidad, se rompe y surgen dudas si testear cada uno de estos fragmentos o mantener el conjunto de tests ya creados. Por otro lado, el concepto de unidad entra en contradicción con lo que se habla por parte de XXAuthor 2XX donde solo importa el tiempo de ejecución, centrándose más en funcionalidad que en elementos bajo ejecución. Luego, en las últimas dos décadas apareció una línea (libro de grow software guyide by tests) aparentemente concilia esta contradicción aplicando el mocking, pues el comportamiento bajo test es de una unidad, la cual es dependiente de otras, pero gracias al mocking no entrar “en juego” y se mantiene una ejecución muy rápida. Esta estrategia, aparte de considerarse unitarios, se les suele llamar test en solitario. Despues, en un intento de abarcar más hay definiciones que hacen mención a test sobre elementos donde o somos owner o tenemos pleno control, es decir cualquier cuestion de nuestro sistema excluyendo a elementos desarrollados por tercereos. La conclusión sobre las definiciones es que test unitario se usa como comodín y esto puede dificultar la comunicación en un equipo y cabe preguntarse ¿No hay otras categorizaciones mejores

Por otro lado, ¿qué ventaja tiene en escribir este tipo de tests? Al ser test de corto alcance, pueden llegar a ser más fáciles de escribir (Si no hay mocking en medio), Cambios en dependencias no impactan en el resultado de los tests y el feedback es muy rápido, así cómo localizar que elemento “se ha roto” en medio de un refactoring, por último se puede cerrar una implementación para que otras personas continúen el desarrollo dando importancia al cómo se hace, más que al resultado (test de caja blanca). Sin embargo, son varias las desventajas que conlleva usar este tipo de tests. Los test se quedan acoplados al diseño, con lo cual estos se ven afectados ante un cambio de diseño, cuando se trata de una unidad que depende de otras, obliga a simular y hacer test de caja blanca, lo cual dificulta aplicar diferentes implementaciones para obtener un mismo resultado, con lo cual podemos decir que quedan más orientados a la implementación concreta de una funcionalidad más que satisfacer simplemente la funcionalidad. Por último, al no verse afectado por cambios de dependencias, podemos incurrir a que tenemos un defecto no notificado cuando si aplica un incorrecto cambio de código.

Adicionalmente, es importante comentar la confusión que existe entre este tipo de test y la técnica de desarrollo Test Driven Development (TDD). Las personas que la practican, normalmente, asocien esta práctica con escribir tests unitarios (unit testing). Esto ocurre por cuestiones como que los nombres de los frameworks de testing que suele contener unit en sus nombres, también al principio Kent Beck al documentar la práctica de TDD (TDD guided by example) hablaba de test unitarios siempre, pero con el tiempo y tras entrar más ampliamente esta técnica en práctica, el mismo Kent Beck deja de hablar de test unitarios pues surgen otras prácticas como Behaviour Driven Development (BDD) donde aparecen tests más interesantes, prácticos y ambiciosos que los test unitarios. Además, el mismo kent beck habla de que cosas son deseables que tenga un test y el más revelador es el de “deben ser sensibles a comportamiento, no a la estructura” lo que dirige al testing a que no debe estar acoplado al diseño para se cumpla esto

Una práctica cómun con test unitarios es empezar con un problema grande simulando todo y crear nuevas suits para testear estas dependencias simuladas en otros test unitarios. O incluso al evolucionar una unidad extraer conceptos independientes para mejorar el diseño y testear estos en tests unitarios (pero queda acoplado) quedando los test más interedos en el diseño que en la funcionalidad (que debería dar igual cómo se resuelve para dar libertad en esto precisamente)

Al generar suits de test unitarios se rompe la visión de conjunto de una funcionalidad y pueda dificultar ver ciertos olores pues “se facilita” el como generar el tests y oculta un problema de diseño en el ambito simulado. Entonces, puede quedar oculto problemas o la promoción de mejora del diseño. Es decir, que el diseño sea más flexible y quede acoplados (conocer mucho sobre tus dependencias en los tests)

### Tests de integración

La definición de este tipo de test es muy variada, se les suele relacionar con test end to end, tests sociales o tests de sistema. Lo que tienen en común es que se testea la colaboración de diferentes elementos en conjunto, ya sean estos totalmente desarrollados por la persona desarrolladora o por entre los de esta y otras terceras. Las diferentes definiciones hablan del nivel de granularidad y ambición y ownership de los elementos.

### Conclusión

Esta categorización se centra más en el cómo que en el qué. Además, esta repleta de ambiguiedades y contradicciones. Por tanto, desde el punto de vista de desarrollo de software, dificulta la comunicación efectiva para generar un software de calidad…..

- Tests Unitarios (tests solitarios)

Estos tests se les suele asociar a: 1) unidad, 2) rapidez (>10ms) y 3) al mocking.

Analizando estas ideas. Primero, queda ambiguo lo que representa una unidad: ¿Un método? ¿Una clase? ¿Un modulo?. Segundo, rápidez por si solo se llega a contradecir con el concepto de unidad, ¿Si testea varias unidades y el test tarda poco es unitario?. Y finalmente,

- Tests unitarios/de componente
- Tests de integración/end to end
- Test sociales

## De acuerdo a qué testean

## De acuerdo a cómo están implementados

## De acuerdo a cómo ejecutan

## De acuerdo a cómo se comportan

## De acuerdo a quién lo hace

## De acuerdo a cómo se hacen



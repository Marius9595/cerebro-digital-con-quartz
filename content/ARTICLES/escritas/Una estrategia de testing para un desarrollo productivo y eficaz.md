

El desarrollo de software guiado por tests requiere un elemento fundamental para ser efectivo: un feedback rápido. Esto es crucial para la ejecución continua de los tests, especialmente durante la etapa de mejora del diseño o refactorización. Sin embargo, lograrlo en un proyecto real no es tarea fácil, ya que el número de tests puede superar el centenar, con diferentes tiempos de ejecución. En mi experiencia, he enfrentado esta dificultad, lo que complicaba la realización de cambios en el código. Con el tiempo, aprendí que no era necesario ejecutar todos los tests al trabajar en una sección específica de la aplicación; bastaba con asegurarme de que el conjunto de elementos acoplados continuaran pasando los tests. Esto representó una mejora, y durante un tiempo fue el mejor enfoque que tenía, hasta que comencé a ver los webinars de "Diseño a la gorra" de 10pines, dirigidos por Hernán Wilkinson. Estos tuvieron un gran impacto en mí, pues ampliaron mi perspectiva sobre el desarrollo guiado por tests. Aprendí a enfocar los tests para aliviar el dolor de la ejecución prolongada y, además, pude conectar estos conocimientos con otros relacionados con el diseño orientado a objetos y el testing. El resultado es una estrategia que actualmente en el equipo que estoy estamos aplicando, puesnos permite facilitar el cambio y, lo más importante, obtener un feedback rápido. A continuación, te explicaré esta estrategia en detalle.
## Un cambio de perspectiva sobre los tests

Al trabajar con tests, es común hablar de los **Niveles de testing**, que incluyen: **Test unitario**, **Test de integración** y **Test end to end**. Aunque esta es una forma extendida de categorizar los tests, otra perspectiva interesante es la que proponen [[Steve Freeman]] y [[Nat Pryce]] en su libro [[_Growing Object-Oriented Software, Guided by Tests_]]:

- **[[Test unitario (1)|Test solitario]]s**: Verifican que un objeto se comporte como se espera. Si el objeto colabora con otros, estos deben ser simulados.
- **[[Test de integración (1)]]**: Confirman que nuestro código interactúa correctamente con código de terceros que no podemos modificar.
- **T[[Test end to end (1)|Test de Aceptación]]**: Evalúan de manera indirecta si el sistema en su totalidad (a través de flujos completos) funciona correctamente.

Aunque este enfoque es razonable, se centra principalmente en la granularidad o el alcance del código. En el webinar [[Todo lo que quisiste saber sobre los tests]], [[Hernan Wilkinson]] presenta una visión más interesante sobre los tests: la distinción entre tests para programadores y tests de infraestructura o integración. Este enfoque proporciona una manera simple y útil de entender los tests:

- **Tests para programadores**: Se enfocan en cumplir los requisitos funcionales y tienen como principal característica el proporcionar un ciclo de retroalimentación rápido.
- **Tests de infraestructura o integración**: Verifican que nuestro código se integre correctamente con tecnologías externas de las que depende nuestra aplicación.

Resulta interesante que [[Robert C. Martin]] también aborda esta visión en su libro [[Clean Craftsmanship Disciplines, Standards and Ethics]]:

> [[Test de programador (1)]]: Test escrito por y para programadores con el propósito de especificar el comportamiento del sistema.

Esta visión forma la base de la estrategia que propongo. Ahora queda por resolver: ¿Cómo se implementa esto? Veamos los puntos clave.


## Arquitectura de Puertos y Adaptadores

Esta arquitectura se basa en tres capas principales:

* **Aplicación**: Actúa como punto de conexión entre el dominio y la infraestructura.
* **Dominio**: Contiene todas las reglas de negocio encapsuladas.
* **Infraestructura**: Se encarga de las adaptaciones y la interacción con código de terceros para conectar con el mundo exterior.

Para la estrategia de testing, la capa de aplicación es clave, ya que en ella se definen los casos de uso o servicios. En esta capa se declaran los puertos o interfaces, que actúan como barreras y permiten la intercambiabilidad de la infraestructura. Al realizar pruebas sobre estos elementos, se validan los requisitos funcionales en su totalidad.

Si utilizamos implementaciones reales de la infraestructura en estas pruebas, podríamos enfrentarnos a ralentizaciones significativas. Mientras que los tests normalmente se ejecutan en milisegundos, el uso de implementaciones reales puede extender el tiempo de ejecución a segundos, ¡un aumento de tres órdenes de magnitud! Aunque pueda parecer insignificante, el problema surge cuando esos segundos se multiplican por el número de tests. Por ejemplo, con 60 tests, podríamos estar esperando un minuto tras cada pequeño cambio.

Para mitigar este problema, se suelen utilizar dobles de tests que aceleran la ejecución. Sin embargo, esto significa que no se verifica cada implementación real de manera individual, sino que se confía en un test final que comprueba que todo funciona correctamente al utilizar las implementaciones reales. ¿Existe una alternativa a esta duplicación de tests? Vamos a analizar el uso de dobles de tests.


## Dobles de test
Vamos a hablar de los dobles de tests con la clasificación formal, la de [[Meznaros]]. Pero con el análisis que hace [[Robert C. Martin]] en [[Clean Craftsmanship Disciplines, Standards and Ethics]]. La siguiente imagen (reproducida del libro) es un buen resúmen:

![[jerarquía-dobles-de-test.excalidraw]]

Esta jerarquía tiene mucha importancia para la estrategia de test. Como se puede ver hay dos ramas de dobles de test, donde la diferencia radica en que una implementa comportamiento (Fakes) y los otros son objetos que se configuran para realizar un acción que facilite los tests o su verificación. Estos segundos hasta el Stub son razonables y poco acoplantes entre los test y el código de producción, pero los spy y mocks provocan un acoplamiento de cómo se resuelve el algoritmo detras de los casos de uso o services haciendo a los tests frágiles al cambio. Por lo tanto, a no ser que se trate de un código legacy, no es el mejor enfoque para permitir o facilitar un feedback loop pues no hay que estar reconfigurando estos tests que se van rompoiendo al aplicar refactoring. Luego , por otro lado estan los [[Fake Object]] que funcionan como una pieza real pero simplificada. [[Robert C. Martin]] no los tiene muy en consideración porque al crecer las aplicaciones  hay que gestionar más casos y por tanto esta pieza se vuelve más compleja y es dificil mantener y de hacerlo harían falta escribir tests. Aunque si lo vemos bien, esto permite mantener un testing de caja negra como si usaramos implementaciones reales pero con la ventaja de mantener ejecuciones del orden de ms. Pero de nuevo, si este Fake object no funcionará como debe, puede pasar lo que menciona  [[Sandy Metz]] en su libro [[Practical Object-Oriented Desing (2º Edition)]] cuando habla sobre la  [[Inyección de una dependencia real (usada en producción) vs un doble de tests]]. Y es que podría pasar que el test funcional no falle pero la aplicación si. Entonces, ¿Es inevitable usar implementaciones reales y asumir el coste? Pues la misma [[Sandy Metz]] propone un enfoque de testing basado en roles que permite asegurar el funcionamiento siempre y de forma alineada con las implementaciones reales y !Sin costes adicionales! sin necesidad de escribir y mantener nuevos tests.

## Testing de roles
Como mencionamos en el apartado de Arquitectura de Puertos y Adaptadores, la capa de aplicación define unas interfaces a las cuales la infraestructura se "conecta" para interactuar con la aplicación. Estas interfaces, en realidad, son roles o _duck types_ como los describe [[Sandy Metz]]. Nos referimos a que varios objetos de diferente naturaleza en un contexto determinado pueden asumir un rol para cumplir un propósito específico. Un ejemplo común en una aplicación es el Repositorio. Según [[Sandy Metz]], podríamos crear tests compartidos, o más correctamente, testear el rol. A nivel práctico, esto consiste en parametrizar una suite de tests, donde en la parametrización se incluyen las diferentes implementaciones de la interfaz que define el rol, incluyendo también los _fake objects_. De esta forma, el objeto realmente se convierte en un elemento intercambiable con otros elementos reales. Sin embargo, podrías pensar que ejecutar esta suite sería aún más costoso, ya que se testean todas las implementaciones. Pero esto tiene una solución simple.

## Configuración de ejecución de tests
En este punto es donde se hace explicito la tipología de tests que trata esta estrategia, pues debemos crear dos configuraciones para lanzar todos los tests: una para los tests de programadora y otra para los de infraestructura. Dependiendo del framework de testing se puede hacer de una manera u otra. Por ejemplo con vitest, esto se puede gestionar con dos fichero vitest.config.ts. donde en una establezca una variable de entorno que condicione la construcción del array de implementaciones que se usan en la parametrización del rol. Es decir, para los tests de programadora se permite que el array solo contenga el fake object y el resto solo se incluyen en la otra configuración. De esta manera, ya tendremos la posibilidad de testear todo al completo con feedback loop rápido.


## La estrategia en acción, un ejemplo para ver en código la estrategia
A continuación vamos a ver un pequeño ejemplo con typescript para ver la estrategia en acción. El problema que vamos a ver una porción de una aplicación empresarial, el fichaje de empleados. En la aplicación se pueden crear, leer los registros horarios y gestionar el contador de tiempo. Digamos que tenemos que desarrollar un caso de uso que sea "Encontrar el fichaje en progreso" para que en un frontal se pueda mostrar cuando tiempo lleva trabajando el trabajador y a que hora ha empezado. En el backend escribiríamos algo así:

```typescript
class FindTimeTrackInProgress {
	constructor(private readonly timetracksRepository: TimeTracksRepository)

	execute(): TimeTrack {
		// Code
	}
}
```

Aquí se declara esa barrera con la infraestructura con la abstracción TimeTracksRepository. Esta podría tener la siguiente interfaz:

```typescript
export interface TimeTracksRepository {  
    create(timeTracking: TimeTrack): Promise<void>  
    findAllTimeTracksOf(employeeId: string): Promise<TimeTrack[]>  
    update(timeTrack: TimeTrack): Promise<void>  
    findTimeTrackingInProgressOf(employeeId: string): Promise<TimeTrack | undefined>  
}```

entonces para poder testear la funcionalidad requerida podemos crear una implementación fake de esta interfaz, una implementación en Memoria. Pero por muy simple que pueda ser, queremos asegurar es confiable porque usaremos esta interfaz en los otros casos de usos. Entonces, creamos la siguiente suit de tests, pero no sobre la implementación esta, sino sobre el rol, TimeTracksRepository

```typescript
describe('TimeTracksRepository', () => {

	it('should return undefined if there is no time tracking in progress', async () => {  
	const repository = new TimeTracksMemoryRepository([])
	    const timetrack = await repository.findTimeTrackingInProgressOf(emailUserAuthenticated);  
	  
	    expect(timetrack).toBeUndefined()  
	})  
	  
	it('should return the time tracking in progress', async () => { 
		const repository = new TimeTracksMemoryRepository([])
	    const timeIn = '2021-01-01T12:00:00Z'  
	    const employee = 'mario@gmail.com'
	    const timetrack = TimeTrack.from('mario@gmail.com',timeIn)
	    await repository.create(timetrack)  
	  
	    const timeTrackInProgress = await repository.findTimeTrackingInProgressOf(employee)!;  
	  
	  
	    expect(timeTrackInProgress).toStrictEqual(timetrack)
	})
	
})
}```

Para esto podríamos resolver los test con el siguiente código (ojo solo muestro resultados, pero debe ser resultado de un desarollo iterativo-incremental):

```typescript
export class TimeTrackMemoryRepository implements TimeTracksRepository {

private timeTracks: TimeTrack[] = [];

  findTimeTrackingInProgressOf(employeeId: string): Promise<TimeTrack | undefined> {  
    const timeTrackInProgress = this.timeTracks.find(timeTrack => {  
      return timeTrack.hasEmployee(employeeId) && timeTrack.isInProgress()  
    })  
    return Promise.resolve(timeTrackInProgress);  
  }
  }
```


En este punto, podríamos usar esta implementación fake como un elemento indistinguible con seguridad en nuestros test funcionales manteniendo un enfoque de tets de caja negra. Sin embargo, ahora cuando queramos usar una implementación real, ¿cómo lo hacemos? Pues simplemente hay que parametrizar los tests de TimeTracksRepository:

```typescript
describe.each([
 {type: 'memory', repository: new TestTimeTracksMemoryRepository()},
 {type: 'mongodb', repository: new TestTimeTracksMongoDbRepository()},
])('TimeTracksRepository type $type', ({repository}) => {

	beforeEach(() => {
	// Code to set initial repository state correctly
	})
	
	afterEach(() => {
	// Code restablish de repository
	})
	
	afterAll(() => {
	// Code close "connection" with extenal services or something else
	})

	it('should return undefined if there is no time tracking in progress', () => {//code})
	  
	it('should return the time tracking in progress', () => {//code})
	
})
}```

de esta manera todos los tests se ejecutan para cada implementación del rol. Es decir, !Ya tenemos escritos los tests para cubrir la nueva implementación que vamos a usar en producción! solo tenemos que ir resolviendo estos con código de forma incremental. Por esto, nuestra implentación en memory se vuelve indistinguible.

Un pequeño inciso, no hay un typo con la palabra test delante de los nombres de las implentaciones. Es una práctica recomendada no testear directamente los objetos, sino usar una[[Subclase específica de test]] para facilitar el testing. En nuestro caso, permite introducir ciertas utilidades como limpiar (clean) el repositorio, algo que no forma parte de la intefaz del rol, pero es necesario para hacer test deterministas. También nos sirve para encapsular la conexión e instanciación de la implementación de MongoDB y simplificando así su uso en la suit de tests.

Dicho lo cual, queda resolver la ejecución de test, porque ahora mismo todos los tests se ejecutarían y los de mongodb realentizan al menos una orden de magnitud (ahora mismo es nada, pero más cosas en otras verticales provocarán una realentización). Para ello, asumimos que usamos Vitest como framework de testing. Este nos permite crear configuración de ejecución vía ficheros de configuración. El mínimo esfuerzo es condicionar la construcción de array de implementación bajo una variable de entorno:


```typescript

const timeTracksRepositories = (isIntegrationTesting) => {
	const fakeRepository = [
		 {type: 'memory', repository: new TestTimeTracksMemoryRepository()}
	]
	if(isIntegrationTesting){
		return [
			  fakeRepository
			 {type: 'mongodb', repository: new TestTimeTracksMongoDbRepository()},
		]
	}

	return [fakeRepository]
	
}

describe.each(
timeTracksRepositories(process.env.EXECUTE_INTEGRATION_TESTS)
)('TimeTracksRepository type $type', ({repository}) => {
	//tests
})
```

Por otro lado, creamos la configuración para setear esta variable de entorno:

```typescript
//vitest.with-integration.config.ts

// https://vitejs.dev/config/
import {configDefaults, defineConfig} from 'vitest/config'
import {resolve} from 'path'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: './tests.setup.ts',
    env: {
      "EXECUTE_INTEGRATION_TESTS": "true" //HERE!
    }
  }
})
```

Con todo esto ya podemos finalmente ejecutar tanto por IDE como por linea de comandas directamente con los script de npm los dos conjuntos de tests por separados. En el segundo caso sería algo así:

```json
	//Package.json
	scripts: {
		test:for_programming,
		test:with_integration
	}
```

![[estrategia-de-testing.excalidraw]]
## Conclusiones
Con todo lo anterior, logramos mantener en el conjunto de tests que usamos para cumplor los requisitos funcionales, un feedback loop rápido. Al mismo tiempo mantenemos la seguridad de que la aplicación funcionará porque la figura del Fake Object se vuelve un elemento intercambiable pues cumple el protocolo de comunicación y cumple el comportamiento al igual que la piezas que se usarán en producción. Y es intercambiable porque la capa de aplicación no entiende de Fake Object, entiende de objetos que cumplen un rol (declarado en la interfaz) que sean capaces de responder a las peticiones y tenemos la seguridad porque tenemos constatado con tests que funciona cómo el rol debería. El resultado final es tener una estrategia que permite mantener a las personas desarrolladoras un ritmo de traabajo no lastrado por los tests, con lo cúal con más incentivo para poder hacer mejoras continuas en el diseño  aplicando refactoring.  Por otro, lado hay otros tipos de testing más allá de asegurar los requisitos funcionales, como los de carga que no son objeto de esta estrategia, pero no son el centro o al menos la preocupación diaria en el desarrollo. 

## Referencias
* [[Sandy Metz]], [[Practical Object-Oriented Desing (2º Edition)]], Designing Cost-Effective Tests pp 239, 245-257
* [[Robert C. Martin]], [[Clean Craftsmanship Disciplines, Standards and Ethics]], Test Doubles, pp 137-154
* [[Robert C. Martin]], [[Clean Craftsmanship Disciplines, Standards and Ethics]], Test Desing, pp 180-181
* [[Steve Freeman]], [[Growing Object-Oriented Software, Guided by tests]], What is the point of test-driven-development, pp 9
* [[Hernan Wilkinson]], [[Diseño a la gorra temporada 1]], todo lo que quisiste saber sobre los test 










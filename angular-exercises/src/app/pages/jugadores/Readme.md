# ¿Qué es OnInit?
OnInit es una interfaz de Angular que implementa el hook ngOnInit(). Se utiliza para ejecutar código justo después de que Angular haya inicializado todas las propiedades del componente.

# ¿Es obligatorio usar OnInit?
No, no es obligatorio. Puedes poner toda la lógica directamente en el constructor o en otras funciones, pero no siempre es recomendable. Depende del caso:

Para inicializar datos del componente desde un servicio, SI es recomendable usar ngOnInit porque el constructor debería ser lo más liviano posible.

Para hacer una llamada HTTP, SI, porque las dependencias ya están inyectadas y listas.

Para acceder a propiedades @Input() de un componente hijo, SI, porque en el constructor aún no están disponibles.

Para cuando sólo estás inicializando una propiedad con un valor fijo o simple, NO es necesario, porque podés hacerlo directamente al declarar la propiedad.

Para cuando la lógica puede ir en el constructor sin problemas, NO hace falta, siempre que no dependa del DOM o de inputs.

# Conclusión
OnInit es útil para separar la lógica de inicialización del constructor y esperar a que Angular haya hecho su trabajo inicial.

Sí, podés evitarlo en casos simples.

Pero en apps medianas o grandes, o cuando usás @Input(), HTTP o lógica compleja, es mejor usarlo.

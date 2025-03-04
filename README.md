# portafolio


<a href="https://github.com/Mariannapodbrscek/7daysofcode_day_6">Visualiza mi repositorio</a>

________________________________________
#7daysofcode #dia6

¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? ¡Hoy tu desafío es hacerlo aún más interesante!

Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.

Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante que sepas cómo hacerlo.

Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección de "Consejos".

Deberás crear la opción de **eliminar algún elemento de la lista**, que se mostrará junto con la pregunta: “**¿deseas añadir un alimento a la lista de compras?**”.

A partir de ahí, si la persona elige esa opción, el programa **imprimirá los elementos presentes en la lista actual**, y la persona deberá **escribir cuál de ellos desea eliminar**.

Después de eso, el programa **eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.**

Finalmente, el programa volverá al ciclo inicial de preguntas.

Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.

Por ejemplo: **“¡No fue posible encontrar el elemento en la lista!”.**

Recuerda que la opción de eliminar un elemento solo deberá estar disponible **a partir del momento en que exista al menos un elemento en la lista de compras.**


**CONSEJO**

Puedes buscar el elemento que la persona desea eliminar de la forma que prefieras, utilizando **métodos de Javascript para ello**.

Existe el método .includes(elemento), que devuelve **true** o **false** si el array en cuestión contiene dicho elemento o no.

Existe también el método .indexOf(elemento), que devuelve la posición de ese elemento dentro del array, o `-1` si no lo encuentra.

Para la eliminación en sí, existen diferentes métodos. El método shift, por ejemplo, elimina siempre el primer elemento de la lista; el método pop elimina el último; mientras que el método splice elimina un cierto número de elementos a partir de una determinada posición. Elige el que consideres que tiene más sentido para tu pequeño programa.

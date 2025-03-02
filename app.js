let listaDeCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
  };
  
  function mostrarLista() {
    const listaDiv = document.getElementById("listaDeCompras");
    listaDiv.innerHTML = ""; // Limpiar la lista anterior
  
    let listaHTML = "<h2>Lista de Compras:</h2>";
  
    for (let categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        listaHTML += `<div class="category">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}:</div><ul class="items">`;
        listaDeCompras[categoria].forEach(item => {
          listaHTML += `<li>${item}</li>`;
        });
        listaHTML += "</ul>";
      }
    }
  
    listaDiv.innerHTML = listaHTML;
  }
  
  function agregarElemento() {
    let respuesta = confirm("¿Deseas AGREGAR un alimento a la lista de compras?");
  
    if (respuesta) {
      let alimento = prompt("¿Qué alimento deseas agregar?");
      let categoria = prompt("¿En qué categoría se encaja este alimento? (frutas, lácteos, congelados, dulces)").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      if (listaDeCompras[categoria]) {
        listaDeCompras[categoria].push(alimento);
        alert(`${alimento} ha sido agregado a la categoría ${categoria}.`);
        mostrarLista(); // Mostrar la lista actualizada
        agregarElemento(); // Continuar preguntando
      } else {
        alert("Categoría no válida. Intenta nuevamente.");
      }
    } else {
      mostrarLista();
      eliminarElemento(); // Llamada para eliminar un alimento
    }
  }
  
  function eliminarElemento() {
    if (listaDeCompras.frutas.length > 0 || listaDeCompras.lacteos.length > 0 || listaDeCompras.congelados.length > 0 || listaDeCompras.dulces.length > 0) {
      let eliminar = confirm("¿Deseas ELIMINAR un alimento de la lista de compras?");
      
      if (eliminar) {
        let categoria = prompt("¿De qué categoría deseas eliminar un alimento? (frutas, lácteos, congelados, dulces)").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        if (listaDeCompras[categoria] && listaDeCompras[categoria].length > 0) {
          console.log(`Elementos en la categoría ${categoria}: ${listaDeCompras[categoria].join(", ")}`);
          let itemAEliminar = prompt("¿Qué alimento deseas eliminar?");
          
          let indice = listaDeCompras[categoria].indexOf(itemAEliminar);
          
          if (indice !== -1) {
            listaDeCompras[categoria].splice(indice, 1);
            alert(`${itemAEliminar} ha sido eliminado de la categoría ${categoria}.`);
            mostrarLista(); // Actualizar la lista
          } else {
            alert("¡No fue posible encontrar el elemento en la lista!");
          }
        } else {
          alert("No hay alimentos en esta categoría.");
        }
      } else {
        alert("No se eliminó ningún alimento.");
      }
    } else {
      alert("La lista está vacía. No puedes eliminar elementos.");
    }
  
    let finalizar = confirm("¿Deseas finalizar y salir?");
    if (finalizar) {
      alert("¡Gracias por usar la lista de compras!");
    } else {
      agregarElemento(); // Volver a preguntar si desea agregar un alimento
    }
  }
  
  // Iniciar el programa al cargar la página
  mostrarLista();
  
  
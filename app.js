
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de texto
    const listaAmigos = document.getElementById('listaAmigos'); // Lista de amigos
    const nombre = inputAmigo.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si está vacío
        return; // Salir de la función
    }

    // Crear un nuevo elemento <li> para la lista
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre; // Asignar el nombre al <li>
    listaAmigos.appendChild(nuevoAmigo); // Agregar el <li> a la lista

    inputAmigo.value = ""; // Limpiar el campo de texto
}

// Función para sortear un amigo
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos'); // Lista de amigos
    const resultado = document.getElementById('resultado'); // Elemento para mostrar el resultado
    const amigos = listaAmigos.getElementsByTagName('li'); // Obtener todos los <li> de la lista

    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero."); // Mostrar alerta si no hay nombres
        return; // Salir de la función
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio
    const amigoSecreto = amigos[indiceAleatorio].textContent; // Obtener el nombre del amigo seleccionado

    // Mostrar el resultado del sorteo
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}

// Función para realizar la búsqueda
function searchRecipes() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    fetch(`/api/recipes/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            // 'data' contiene las recetas coincidentes, actualiza el contenido del carrusel aquí
            window.location.href = `/results?query=${searchQuery}&recipes=${JSON.stringify(data)}`;
        })
        .catch(error => console.error('Error en la búsqueda:', error));
}

// Función para manejar el evento al presionar "Enter"
function handleEnterKeyPress(event) {
    if (event.keyCode === 13) { // 13 es el código de tecla para "Enter"
        searchRecipes(); // Llama a la función de búsqueda cuando se presiona "Enter"
    }
}

// Asigna el controlador de eventos al elemento de entrada
document.getElementById('search-input').addEventListener('keydown', handleEnterKeyPress);

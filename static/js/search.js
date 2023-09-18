function searchRecipes() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    fetch(`/api/recipes/search?query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            // Redirige a la página de resultados y pasa los datos como parámetro
            window.location.href = `/results?query=${searchQuery}&recipes=${JSON.stringify(data)}`;
        })
        .catch(error => console.error('Error en la búsqueda:', error));
}

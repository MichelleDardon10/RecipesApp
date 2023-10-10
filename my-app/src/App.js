import React, { useState, useEffect } from 'react';
import './App.css'
import Pages from './pages/Pages';
import backgroundImage from './fondo.jpg';
import pollo from './pollo.jpg'; 
import SearchBar from './components/SearchBar.js';

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const handleSearchResults = (searchResults) => {
    console.log("Datos de búsqueda recibidos:", searchResults);
    setAllRecipes(searchResults);
  };

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => {
        setAllRecipes(data.recipes);
        console.log(data);
      });
  }, []);

  const backgroundStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  const titleContainerStyles = {
    width: '105%',
    margin: '0 auto',
    paddingTop: '0',
  };

  const titleStyles = {
    backgroundImage: `url(${backgroundImage})`,
    textAlign: 'left',
    fontSize: '2.2rem',
    color: '#006000',
    paddingTop: '80px',
    backgroundSize: '105%',
    backgroundPosition: 'center',
    fontFamily: 'Georgia, serif',
  };

  const recipeTitle = {
    fontSize: '22px',
    color: '#007000',
    marginTop: '10px',
    fontFamily: 'Georgia, serif',
    marginLeft: '10px',
    marginBottom: '5px'
  };

  const recipeSubtitle = {
    fontSize: '18px',
    fontWeight: 'normal',
    color: '#006800',
    marginTop: '5px',
    marginLeft: '25px',
    fontFamily: 'Georgia, serif',
  };

  const recipeFont = {
    fontSize: '15px',
    fontWeight: 'normal',
    color: '#000000',
    marginTop: '5px',
    marginLeft: '25px',
    fontFamily: 'Georgia, serif',
  };

  const recipeContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '0 -10px', // Agregamos márgenes negativos para compensar el padding
    marginLeft: '5px',
    marginRight: '5px',
  };

  const recipeStyles = {
    flex: '0 0 calc(33.33% - 20px)', // 33.33% con margen de 10px a la izquierda y derecha
    padding: '10px',
    border: '0.5px solid #ddd',
    borderRadius: '1px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    margin: '20px',
    maxWidth: '300px',
    /* Otras propiedades de estilo específicas para las recetas */
  };

  return (
    <div style={backgroundStyles}>
      <div style={titleContainerStyles}>
        <h1 style={titleStyles}>RecipesApp</h1>
      </div>
      <div className='App'>
        {Array.isArray(allRecipes) && (
          <SearchBar placeholder='Enter a recipe ...' data={allRecipes} onSearchResults={handleSearchResults}/>
        )}
      </div>
      <Pages />
      {Array.isArray(allRecipes) && allRecipes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div style={recipeContainerStyles}>
            {allRecipes.map((recipe) => (
              <div key={recipe.id} style={recipeStyles}>
                <h2 style={recipeTitle}>{recipe.name}</h2>
                <p style={recipeFont}>Posted by: {recipe.post_by}</p>
                <p style={recipeFont}>Valoration: {recipe.valoration}</p>
                <img src={pollo} alt={recipe.name} style={{ maxWidth: '200px', height: 'auto', marginLeft: '30px' }} />
                <h3 style={recipeSubtitle}>Ingredients:</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.ingredient_name}</li>
                  ))}
                </ul>
                <h3 style={recipeSubtitle}>Comments:</h3>
                <ul>
                  {recipe.comments.map((comment, index) => (
                    <li key={index}>
                      <p>Comment: {comment.comment_text}</p>
                      <p>Posted by: {comment.posted_by}</p>
                    </li>
                  ))}
                </ul>
                <h3 style={recipeSubtitle}>Steps:</h3>
                <ol>
                  {recipe.steps.map((step, index) => (
                    <li key={index}>{step.step_text}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

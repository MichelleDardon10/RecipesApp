import React, { useState, useEffect } from 'react';
import Pages from './pages/Pages';
import backgroundImage from './fondo.jpg';

function App() {
  const [data, setData] = useState({ recipes: [] });

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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

  return (
    <div style={backgroundStyles}>
      <div style={titleContainerStyles}>
        <h1 style={titleStyles}>RecipesApp</h1>
      </div>
      <Pages />
      {typeof data.recipes === 'undefined' ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>
              <p>Posted by: {recipe.post_by}</p>
              <p>Valoration: {recipe.valoration}</p>
              <img src={recipe.image} alt={recipe.name} />
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.ingredient_name}</li>
                ))}
              </ul>
              <h3>Comments:</h3>
              <ul>
                {recipe.comments.map((comment, index) => (
                  <li key={index}>
                    <p>Comment: {comment.comment_text}</p>
                    <p>Posted by: {comment.posted_by}</p>
                  </li>
                ))}
              </ul>
              <h3>Steps:</h3>
              <ol>
                {recipe.steps.map((step, index) => (
                  <li key={index}>{step.step_text}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

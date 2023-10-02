import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.recipes);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((recipe) => (
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

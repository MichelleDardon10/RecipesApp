import React, {useState, useEffect} from 'react'
import Pages from './pages/Pages'
import backgroundImage from './fondo.jpg'

function App(){

  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/recipes")
    .then((res) => res.json())
    .then((data) => {
        setData(data);
        console.log(data);
      });

  },[]);

  const backgroundStyles = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };


  const titleContainerStyles = {
    width: '105%',
    margin: '0 auto', // Esto centrará el contenedor horizontalmente en la pantalla.
    paddingTop: '0', // Añade espacio interior al contenedor si es necesario.
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
    //fontWeight: 'bold',
  };
  
  return (
    <div style={backgroundStyles}>
      <div style={titleContainerStyles}>
      <h1 style={titleStyles}>RecipesApp</h1>
      </div>
      <Pages/>
      {(typeof data.recipes === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.recipes.map((recipes, i) => (
          <p key={i}>{recipes}</p>
        ))
      )}
    </div>
  );

}

export default App;
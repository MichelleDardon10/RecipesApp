import React, {useState, useEffect} from 'react'

function App(){

  const [data,setData] = useState([{}])

  useEffect(() => {
    fetch("/recipes").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  },[])
  return (
    <div>
      {(typeof data.recipes === 'undefined') ? (
        <p>Loading...</p>
      ): (
        data.recipes.map((recipes, i) => (
          <p key={i}>{recipes}</p>
        ))
      )}

    </div>
  )

}

export default App
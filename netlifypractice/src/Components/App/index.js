
import React, { useState, useEffect} from "react";

function App() {

  const [pokemon, setPokemon] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState(1);

  useEffect(()=>{
    async function getPokemon() {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
      let data = await response.json();
      console.log(data);
      setPokemon(data.name);
      setImage(data.sprites.front_default);
    }
    getPokemon();
  }, [id] );

  

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    let randomNumber = Math.floor(Math.random()*(151-1)+1);
    setId(randomNumber);
    console.log(randomNumber);
  }
 
  


  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={() => {handleClick()}}>Get Random Pokemon</button>
        <p>display pokemon with id {id} and name {pokemon} here!</p>
        <img src={image} alt=''/>     
      </header>
    </div>
  );
}

export default App;


import React, { useEffect, useState } from 'react'

export const Pokemon = () => {
    const [pokemonCap, setPokemonCap] = useState('');


    const [pokemon, setPokemon] = useState({});
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonCap}`
    
    
    const buscar = (e) => {
        e.preventDefault();
        fetch(url)

    .then(response => {
        console.log(response)
        return response.json()
    
    })
    
    .then(data =>{
        console.log(data)
        setPokemon(data.sprites.front_default) 
    })
}
    
   




console.log(pokemonCap)
  return (


    <div>


        <h1>pokemon</h1>
        <img src={pokemon} alt="" />
        <form onSubmit={buscar}>

            <input type="text" onChange={(e)=> setPokemonCap(e.target.value) } />
            <button>capturar</button>
        </form>
    </div>
  )
}

export  default Pokemon;
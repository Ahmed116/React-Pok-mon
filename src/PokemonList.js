import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList

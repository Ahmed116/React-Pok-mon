import React from 'react'
import PokemonCard from './PokemonCard'
import './style.css'

const PokemonList = (props) => {
  return (
    
    <div className='mainCard'>
      {props.pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} setPokemon={props.setPokemon} setOpen={props.setOpen} handleToogleChange={props.handleToogleChange} />
      ))}
      
    </div>
  )
}

export default PokemonList

import React from 'react'
import './style.css'
import PokemonList from './PokemonList'
import PokemonDetails from './PokemonDetails'

class Pokemon extends React.Component {
  state = { pokemon: [] }

  fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
    const res = await fetch(url)
    const data = await res.json()
    const pokemon = data.results.map((data, index) => ({
      name: data.name,
      id: index + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
      pokemonData: this.fetchPokemonDetails(index + 1),
    }))
    this.setState({ pokemon: pokemon })
  }

  fetchPokemonDetails = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    return data
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return (
      <div className='main' style={{ marginTop: '20px' }}>
        <PokemonList pokemons={this.state.pokemon} />
        <PokemonDetails pokemons={this.state.pokemon} />
      </div>
    )
  }
}

export default Pokemon

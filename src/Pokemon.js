import React from 'react'
import './style.css'
import PokemonList from './PokemonList'
import SearchBar from './SearchBar'
import Header from './Header'
import axios from 'axios'

class Pokemon extends React.Component {
  state = { pokemon: [], search: '' }

  fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
    const res = await axios.get(url)
    const pokemon = await Promise.all(
      res.data.results.map(async (data, index) => {
        const details = await this.fetchPokemonDetails(index + 1)
        // console.log(details, 'data')

        const storedPokemon = !!localStorage.getItem(`pokemon-${details.id}`)
          ? JSON.parse(localStorage.getItem(`pokemon-${details.id}`))
          : { captured: false }
        console.log(
          storedPokemon.captured,
          'localStorage.getItem(`pokemon-${details.id}`)'
        )
        return {
          name: data.name,
          id: details.id,
          captured: storedPokemon.captured,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,

          pokemonData: details,
        }
      })
    )
    this.setState({ pokemon: pokemon })
  }

  fetchPokemonDetails = async (id) => {
    const items = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    return items.data
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value })
  }

  handleToogleChange = (value, id) => {
    const pokemon = this.state.pokemon
    const index = pokemon.findIndex((item) => item.id === id)
    pokemon[index].captured = value.target.checked
    localStorage.setItem(
      'pokemon-' + pokemon[index].id,
      JSON.stringify(pokemon[index])
    )
    this.setState({ pokemon })
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    console.log(this.state.pokemon)
    const { pokemon, search } = this.state
    const lowercasedFilter = search.toLowerCase()
    const filteredData = pokemon?.filter((item) => {
      return item.name.toLowerCase().includes(lowercasedFilter)
    })

    return (
      <div>
        <Header />
        <SearchBar search={search} handleChange={this.handleChange} />
        <PokemonList
          pokemons={search === '' ? this.state.pokemon : filteredData}
          setPokemon={this.props.setPokemon}
          setOpen={this.props.setOpen}
          handleToogleChange={this.handleToogleChange}
        />
      </div>
    )
  }
}

export default Pokemon

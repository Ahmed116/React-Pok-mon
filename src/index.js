import React from 'react'
import ReactDOM from 'react-dom'
import PokemonDetails from './PokemonDetails'
import Pokemon from './Pokemon'
import 'semantic-ui-css/semantic.min.css'
import './style.css'

const App = () => {
  const [pokemon, setPokemon] = React.useState(null)
  const [open, setOpen] = React.useState(false)

  // console.log(pokemon)
  return (
    <div>
      <Pokemon setPokemon={setPokemon} setOpen={setOpen} />
      <PokemonDetails pokemon={pokemon} open={open} setOpen={setOpen} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

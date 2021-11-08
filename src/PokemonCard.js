import React from 'react'
import './style.css'

const PokemonCard = (props) => {
  // console.log(props, 'props')
  return (
    <div className='mainCard' style={{ margin: 'auto' }}>
      <div className='ui link cards'>
        <div className='card'>
          <div
            className='image'
            onClick={() => {
              props.setPokemon(props.pokemon)
              props.setOpen(true)
            }}
          >
            <h4 className='main'>{props.pokemon.id}</h4>
            <img src={props.pokemon.image} alt={props.pokemon.name} />
          </div>
          <div className='content'>
            <h2 className='main'>{props.pokemon.name}</h2>
            <div
              className='content'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {props?.pokemon?.pokemonData?.types?.map((type, index) => (
                <div
                  className='mainCard'
                  style={{
                    padding: '5px',
                    display: 'inlineBlock',
                    fontWeight: 'bold',
                  }}
                >
                  {type.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className='ui toggle checkbox' style={{ margin: 'auto',marginBottom:'10px' }}>
            <input
              type='checkbox'
              name='public'
              checked={props.pokemon.captured}
              onChange={(e) => props.handleToogleChange(e, props.pokemon.id)}
            />
            <label>Captured</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard

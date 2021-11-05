import React from 'react'
import { Component } from 'react'

class PokemonCard extends Component {
  state = {pokemon:[]}

   componentDidMount = async() =>{
    
      const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
      const res = await fetch(url);
      const data = await res.json();
      
      const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
          1}.png`,
      }));
      this.setState({ pokemon: pokemon  });  
  }
 



  render(){
    console.log(this.state.pokemon)

  return (
    <div className='main ui card'>
      <div className='ui slide masked reveal image'>
        <img src={this.state.image} className="visible content"/>
        {/* <img src="/images/avatar/large/elliot.jpg" className="hidden content"/> */}
      </div>

      {/* 
      <div className='content'>
        <p className='header'>Team Fu &amp; Hess</p>
        <div className='meta'>
          <span className='date'>Created in Sep 2014</span>
        </div>
      </div>
      <div className='extra content'>
        <p>
          <i className='users icon'></i>2 Members
        </p>
      </div>
      <div className='ui toggle checkbox' style={{ paddingBottom: '10px' }}>
        <input type='checkbox' name='public' />
        <label>Cupture</label>
      </div> */}
    </div>
  )
}
}

export default PokemonCard

import React, { Component } from 'react';
import './App.css';
import AppContent from './components/app-content';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      pokemonInfo: {
        name: 'Pikachu',
        types: ['Electric'],
        stats: [
          { name: "hp", base_stat: 48, },
          { name: "atk", base_stat: 48, },
          { name: "def", base_stat: 48, },
          { name: "spd", base_stat: 48, },
          { name: "spAtk", base_stat: 48, },
          { name: "spDef", base_stat: 48, }
        ]
      },
      locations: [
        "trophy-garden-area",
        "viridian-forest-area"
      ]
    }
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => {
          const pokemon = response.data;

          Axios.get(pokemon.location_area_encounters)
            .then((response) => {              
              this.setState({
                locations: response.data.map(location => location.location_area.name)
              })
            });                    

          this.setState({
            sprite: pokemon.sprites.front_default,
            pokemonInfo: {
              name: pokemon.name,
              types: pokemon.types.map(type => type.type.name),
              stats: pokemon.stats.map(stat => ({                
                name: stat.stat.name,
                base_stat: stat.base_stat
              }))
            }
          })    
          console.log(this.state)      
        })
    }
  }

  render() {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
      />
    )
  }
}

export default App;

import React from 'react';
import Info from './pokemon/info/info';
import Locations from './pokemon/locations/locations';
import Sprite from './pokemon/sprite/sprite';
import SearchBar from './pokemon/search-bar/search-bar';
import PropTypes from 'prop-types'; 

const AppContent = ({sprite, pokemonInfo, locations, handleSearch}) => {
  console.log(locations)
  return (    
    <div className="app">
      <SearchBar handleSearch={handleSearch} />      
      <div className="pokemon-content">
        {!!sprite && <Sprite img={sprite}/>}
        {!!pokemonInfo && <Info {...pokemonInfo}/>}
      </div>
      {!!locations.length && <Locations areas={locations}/>
      }
    </div>
  );
}

AppContent.propTypes = {
  sprite: PropTypes.string.isRequired,
  pokemonInfo: PropTypes.object.isRequired,
  locations: (props, propName) => {
    if(!(Array.isArray(props[propName]) && props[propName].length > 0))
      return (new Error("The prop `" 
        + propName + "`(Array) must have at least one element.")
      )
  }
}

AppContent.defaultProps = {
  sprite: '',
  pokemonInfo: null,
  locations: []
}

export default AppContent;

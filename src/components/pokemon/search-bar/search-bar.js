import React from 'react';
import "./search-bar.css"

const SearchBar = ({handleSearch}) => (
  <header>
    <input 
      className="search-bar"
      placeholder="Digite o nome do pokémon..."  
      onKeyDown={(e) => handleSearch(e)}
    />
  </header>
)

export default SearchBar;
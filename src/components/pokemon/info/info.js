import React from 'react';
import PropTypes from 'prop-types';
import './info.css';

const Info = (pokemonInfo) => (
  <section className="pokemon-info text-white">
    <h2>Info.:</h2>
    <h4> Name: {pokemonInfo.name} </h4>
    <ul className="no-bullets">
      <li> Type: {pokemonInfo.types.map(type => type)} </li>  

      {pokemonInfo.stats.map((stat, i) => (
        <li key={i}> {stat.name}: {stat.base_stat} </li>)
      )}         
              
    </ul>
  </section>
)

Info.propTypes = {  
  name: PropTypes.string.isRequired,
  type: PropTypes.array.isRequired,
}


Info.defaultProps = {  
  name: 'unknow',
  type: ['unknow'],
  hp: 'unknow',
  atk: 'unknow',
  def: 'unknow',
  spd: 'unknow',
  spAtk: 'unknow',
  spDef: 'unknow',
}

export default Info;
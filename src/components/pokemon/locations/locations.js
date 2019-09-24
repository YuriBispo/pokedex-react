import React from 'react';
import Button from '../../shared/button/button'
import "./location.css";
import PropTypes from 'prop-types';

const Locations = ({areas}) => (  
  <section className="pokemon-locations">
    <Button 
      text='Show locations'
      color="whitesmoke"      
    />
    <h3>Encounter areas</h3>
    <ul>
      {areas && areas.map((area, i) => <li key={i}>{area}</li>)}            
    </ul>
  </section>
)

Locations.propTypes = {  
  areas: PropTypes.array.isRequired
}

Locations.defaultProps = {
  areas: ["Unknow"]
}

export default Locations;
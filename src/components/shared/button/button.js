import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = ({color, text}) => (
  <button     
    style={{backgroundColor: color}}
  > 
    {text}
  </button>
)

Button.defaultProps = {
  color: 'gray'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default Button;
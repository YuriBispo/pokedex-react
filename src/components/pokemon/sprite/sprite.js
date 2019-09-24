import React from 'react';
import Button from '../../shared/button/button'
import PropTypes from 'prop-types';
import './sprite.css';

const Sprite = ({img}) => (
  <figure className="pokemon-sprite">
    <img 
      src={img} 
      alt="A pikachu sprite"
      className="sprite-img"
    />        
    <Button 
      color="whitesmoke"
      text="Change sprite"
    />
  </figure>
)

Sprite.propTypes = {  
  img: PropTypes.string.isRequired
}

Sprite.defaultProps = {  
  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEVVVVX///9GRkbl5eVQUFBLS0vi4uK3t7eEhIRPT09AQED29vZWVlbx8fFlZWX5+fnGxsa/v79sbGyzs7PX19d7e3vPz89fX1+amppmZmZ1dXWPj4/c3Nyjo6Ourq7q6uqIiIifn5+VlZUV/oWUAAADaklEQVR4nO3ci3aiMBAG4AAJGg2IyEVBxfr+D1lte7rN4NrYdQ87s//3BPlPJndUKQAAAAAAAAAAAAAAAAAAAAAAAAAA+BfpT1O35Pm0Na7dlV1dz+fzuu7KXFkrJ6eNXb3dFM1+yFbR1WpIq2KzLa2ZumlPoE3stkXyEc2zGvZHF9upW/hnbNsd03G2L/bnlnFG0x6a5d18V9VW8RyQ2rhN8m28t2qtHMPxqFW3CYr37uCmbvCjTL7OHggYRQWzQnUvYfX5NSKrwahPj+a7qHJGEfX8BwmjhtF087OE0TGeuuHBbidcZkOSpGmSDL+ZhFY9mzq9kTAtjn2dOxvH1pXzQ3FzJtrnU7c8FE2YbeY79+soobVRZT/ciLjlsoHzEg5FtzCj8rucps7jjCuGCdNNOY73zpTVKOKZScTPhMvt7s4x1+YNTVgxWTE+EiYv5n6XaEUjZjWP6fQtYbbOv+0Q3dLD1YFHmV4TVnXIRtMcSMI1lz7MtouwpuZ7MhDbv9y2J9nVocWmySkyLXl0YvhJyPb+SMw6JgnD7fx1f8VkMn0E2aHOxSU0qfSEMUkor0q1X6VLeQlzf6YZxM2l+uSvFlxW/HD26A/DYuoGPV1LThdMdt7hbO8HzLhs2oLFdOMtrQsN6UJx672uyQE4XUzdpCdr6VVUL6xIFwUJ2LB7RbzPzUjAQdhE6kZvxD2Tq8RA8ZEGXMsKqM80YCFrEOqeXpTuZQ1CW9JXmSWnN+7v6Za+kSalqJVQ0wNFNATfr/Kg6UK4kjUGtaJbGXEluiYB005WQEd7cCmtROlxIt2J6kHlxiUqqgdHN2tRJmuhH7/4prmsEtUd7UFhC71y0i8t6IN2NOPzLWIQ3ZHzhLgnCjrNLE+yplGlYnJiklajSpdkFEqr0VGRNtK6UBnyBnMStlIo1fozqbwvg3TnTzT73dQtejZ6fdiIm2jsi/8TS2H3vxeWTKVMviN9gCEnw7W4qdSQbfdMXkJyRzqT9dCkkFACJOQPCflDQv6QkD99mnnEXSVe/+rEIy8gAAAAXBb8hUfcw9Pon6MGcRHpP9akSMgOEvKHhPwhIX9IyB8S8oeE/CEhfzRhIi9hPaRfJIW4pyelY4+8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8L+JpVOJdK+u1CrZUrE9WQAAAABJRU5ErkJggg=='
}


export default Sprite;
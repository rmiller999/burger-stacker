import React from 'react';

const Burger = (props) => (
    <div id="burger">
      <h2>Make a Burger!</h2>  
      
      {props.usedIngredients.map((usedIngredient, i) =>  
      <p key={i} style={{backgroundColor: usedIngredient.color}}>{usedIngredient.name}</p>)}            
      
      <button onClick={props.clearStack}>Clear</button>
    </div>
)
export default Burger;
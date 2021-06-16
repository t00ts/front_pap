import React from 'react';

export function BurgerIcon(props) {
  return(
    <div className="bi-container" onClick={props.handleOpen}>
      <div className="burger-icon"></div>
      <div className="burger-icon"></div>
      <div className="burger-icon"></div>
    </div>
  )
}
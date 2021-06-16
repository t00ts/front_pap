import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseCross } from '../assets/icons/closeCross.svg';
import { ReactComponent as LogoComplete } from '../assets/icons/logoComplete.svg';

export function BurgerMenu(props) {  
  const menuTransformStyle = {
    transform: props.open ? 'translateX(0)' : 'translateX(calc(100% + 35px))'
  }

  return(
    <div className="burger-menu" style={menuTransformStyle}>
      <LogoComplete className="small-logo" />
      <CloseCross className="close-cross" onClick={props.handleClose} />
      <div className="bm-links">
        <Link to="/" onClick={props.handleClose}><h3>Inicio</h3></Link>
        <div className="menu-separator" /> 
        <Link to="/flats/rent" onClick={props.handleClose}><h3>Alquiler</h3></Link>
        <div className="menu-separator" /> 
        <Link to="/flats/buy" onClick={props.handleClose}><h3>Venta</h3></Link>
        <div className="menu-separator" /> 
        <Link to="/contact" onClick={props.handleClose}><h3>Contacto</h3></Link>
        <div className="menu-separator" /> 
        <Link to="/about" onClick={props.handleClose}><h3>Sobre nosotros</h3></Link>
      </div>
    </div>
  );
}
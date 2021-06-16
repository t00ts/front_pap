import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu.jsx';
import { BurgerIcon } from './BurgerIcon.jsx';
import { ReactComponent as MainLogo } from '../assets/icons/logoComplete.svg';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  if (window.innerWidth > 767) {
    return(
      <div className="navbar">
        <Link className="navbar-logo" to="/">
          <MainLogo className="navbar-logo"/>
        </Link>
        <div className="navbar-menu">
          <Link to="/"><h5>Inicio</h5></Link>
          <Link to="/flats/rent"><h5>Alquiler</h5></Link>
          <Link to="/flats/buy"><h5>Venta</h5></Link>
          <Link to="/contact"><h5>Contacto</h5></Link>
          <Link to="/about"><h5>Sobre nosotros</h5></Link>
        </div>
        {/* <h5 className="language">ES</h5> */}
      </div>
    );
  } else {
    return(
      <div className="navbar">
        <Link className="navbar-logo" to="/">
          <MainLogo className="navbar-logo"/>
        </Link>
        <div className="navbar-menu">
          <div><BurgerIcon handleOpen={handleOpen} /></div>
          <BurgerMenu open={open} handleClose={handleClose} />
        </div>
      </div>
    );
  };
}
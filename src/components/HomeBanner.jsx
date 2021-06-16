import React from 'react';
import { Link } from 'react-router-dom';

export function HomeBanner() {
  return (
    <div className="bnr-background">
      <div className="banner">
        <h1>Te ayudamos a encontrar tu piso ideal</h1>
        <div className="bnr-btns">
          <Link className="rent-btn" to="/flats/rent"><h3>Alquilar</h3></Link>
          <Link className="buy-btn" to="/flats/buy"><h3>Comprar</h3></Link>
        </div>
        <div className="flex-banner-footer">
          <h4>Eres propietario? Vende o alquila tu propiedad.</h4>
          <Link className="bnr-contact" to="/contact"><h4>Contacta con nosotros</h4></Link>
        </div>  
      </div>
    </div>
  );
}
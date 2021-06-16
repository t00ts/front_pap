import React, { useState } from 'react';
import { ReactComponent as WhatsappIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/email.svg';

export function Contact() {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    description: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary storing the info on a variable to later send it through email
    let contactInfo = {
      fullName: state.fullName,
      email: state.email,
      description: state.description
    };
    //\
  }

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  if (window.innerWidth > 576) {
    return(
      <div className="container">
        <h1 className="page-title">Contacta con nosotros</h1>
        <div className="title-underline" />
          
        <div className="flex-contact">
      
          <div className="form-container">
            <h3 className="subtitle">Escríbenos tus dudas</h3>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <input type="text" name="fullName" onChange={handleInput} placeholder="Nombre completo" />
                <input type="text" name="email" onChange={handleInput} placeholder="Correo electrónico" />
                <textarea className="input-description" name="description" onChange={handleInput} maxLength="1000" placeholder="Escribe aquí tus cuestiones" />
              </div>
              <div className="btn-container">
                <button className="form-btn" type="submit">Enviar</button>
              </div>
            </form>
          </div>

          <div className="contact-info-container">
            <h3 className="subtitle">Nuestros datos de contacto</h3>
            <div className="contact-info-banner">
              <div className="contact-info">
                
                <div className="whatsapp">
                  <WhatsappIcon />
                  <h5>+34 676 19 16 94</h5>
                </div> 
                <div className="whatsapp">
                  <WhatsappIcon />
                  <h5>+34 665 48 10 47</h5>
                </div> 
                <div className="email">
                  <EmailIcon />
                  <h5>infoayuda@pasoapiso.com</h5>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  } else {
    return(
      <div className="container">
        <h1 className="page-title">Contacta con nosotros</h1>
        <div className="title-underline" />
          
        <div className="flex-contact">

          <div className="contact-info-container">
            <div className="contact-info-banner">
              <div className="contact-info">

                <div className="whatsapp">
                  <WhatsappIcon />
                  <h5>+34 676 19 16 94</h5>
                </div>                 
                <div className="whatsapp">
                  <WhatsappIcon />
                  <h5>+34 665 48 10 47</h5>
                </div> 
                <div className="email">
                  <EmailIcon />
                  <h5>infoayuda@pasoapiso.com</h5>
                </div>

              </div>
            </div>
          </div>

          <div className="form-container">
          <h3 className="subtitle">o escríbenos tus dudas...</h3>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <input type="text" name="fullName" onChange={handleInput} placeholder="Nombre completo" />
                <input type="text" name="email" onChange={handleInput} placeholder="Correo electrónico" />
                <textarea className="input-description" name="description" onChange={handleInput} maxLength="1000" placeholder="Escribe aquí tus cuestiones" />
              </div>
              <div className="btn-container">
                <button className="form-btn" type="submit">Enviar</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    );
  };
  
}
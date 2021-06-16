import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { ReactComponent as RulerIcon } from '../assets/icons/ruler.svg';
import { ReactComponent as BedIcon } from '../assets/icons/bed.svg';
import { ReactComponent as BathtubIcon } from '../assets/icons/bath-tub.svg';
import { ImagesModal } from './ImagesModal';

export function FlatProfile() {
  const [flat, setFlat] = useState({});
  const [flatImages, setFlatImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState('');
  const params = useParams();
  
  useEffect(() => {
    getFlat();
  }, []);
  
  const getFlat = async () => {
    const res = await axios.get(`https://paso-a-piso.herokuapp.com/api/flats/${params.id}`);
    setFlat(res.data);
    setFlatImages(res.data.imagesURL);
  }
  
  const openModal = (e) => {
    setIsOpen(true);
    setImageIndex(parseInt(e.target.id));
  }

  const closeModal = (e) => {
    setIsOpen(false);
  }
  
  return (
    <div className="container">

      {
        isOpen && <ImagesModal images={flatImages} handleClose={closeModal} imageIndex={imageIndex - 1} />  
      }

      <h1 className="page-title">{flat.title}</h1>
      <div className="title-underline"></div>
      {(flatImages.length === 0) && <div className="loading-div"><h2 style={{fontWeight: 400}}>Cargando piso (puede tardar hasta 10 segundos)</h2></div>}
      { !(flatImages.length === 0) &&
        <div className="fp-flex-container">
          
          { (window.innerWidth > 1024) &&
          <div className="images-container">
            <div className="main-image" id="1" style={{backgroundImage: `url(${flatImages[0]})`}} onClick={openModal}/>
            <div className="other-images">
              <div className="other-image" id="2" style={{backgroundImage: `url(${flatImages[1]})`}} onClick={openModal}/>
              <div className="other-image" id="3" style={{backgroundImage: `url(${flatImages[2]})`}} onClick={openModal}/>
              <div className="other-image" id="4" style={{backgroundImage: `url(${flatImages[3]})`}} onClick={openModal}/>
              <div className="other-image" id="5" style={{backgroundImage: `url(${flatImages[4]})`, display: `${(window.innerWidth < 438) ? 'none' : 'default'}`}} onClick={openModal}/>
              <div 
                className="other-image see-all" 
                style={{background: `linearGradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${flatImages[5]}))`}}
                onClick={openModal}
              >
                <h1>+{flatImages.length - 5}</h1>
              </div> 
              
            </div>
          </div>
          }

          { (window.innerWidth <= 1024) && 
          <div className="images-container">
          <div className="main-image" id="1" style={{backgroundImage: `url(${flatImages[0]})`}} onClick={openModal}/>
          <div className="other-images">
            <div className="other-image" id="2" style={{backgroundImage: `url(${flatImages[1]})`}} onClick={openModal}/>
            <div className="other-image" id="3" style={{backgroundImage: `url(${flatImages[2]})`}} onClick={openModal}/>
            <div className="other-image" id="4" style={{backgroundImage: `url(${flatImages[3]})`}} onClick={openModal}/>
            <div className="other-image" id="5" style={{backgroundImage: `url(${flatImages[4]})`}} onClick={openModal}/>
            <div className="other-image" id="6" style={{backgroundImage: `url(${flatImages[5]})`}} onClick={openModal}/>
            
            <div 
              className="other-image see-all" 
              style={{background: `linearGradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${flatImages[6]}))`}}
              onClick={openModal}
            >
              <h1>+{flatImages.length - 6}</h1>
            </div> 

          </div>
        </div>
          }
        
          <div className="flat-info-container">
            <div className="info-header">
              <div className="profile-price-location">
                <h5>Precio: {flat.price}€/mes</h5>
                <h5 className="flat-location">BARCELONA - {flat.location}</h5>
              </div>
              <p className="flat-description">{flat.description}</p>
            </div>
          
            <div className="info-body-footer">
              <div className="fp-card-separator" />
              <div className="info-footer-flex">
                <div className="flex-icon space-between">
                  <RulerIcon />
                  <h5>{flat.floorArea} m2</h5>
                </div>
                <div className="flex-icon space-between">
                  <BedIcon />
                  <h5>{flat.numberOfBedrooms} habitaciones</h5>
                </div>
                <div className="flex-icon space-between">
                  <BathtubIcon />
                  <h5>{flat.numberOfBathrooms} baños</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      }
    </div>

  );
}
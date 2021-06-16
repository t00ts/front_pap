import React from 'react';
import Carousel from 'react-elastic-carousel';
import { ReactComponent as CloseCross } from '../assets/icons/closeCross.svg';

export function ImagesModal(props) {

  const style = {
    transitionMS: '100',
    width: '1300px'
  }
  
  return (
    <div className="bg-modal">
      <CloseCross 
        className="close-modal"
        onClick={props.handleClose}
        />

      <div className="carousel-wrapper">
        <Carousel style={style} className="carousel" initialActiveIndex={props.imageIndex} >
        {
          props.images.map((image) => {
            return (
              <div
                className="carousel-image"
                key={image}
                style={{backgroundImage: `url(${image})`, width: '200px', height: '300px', backgroundSize: 'cover'}} 
              />
            )})
        }
        </Carousel>
      </div>

    </div>
  )
}
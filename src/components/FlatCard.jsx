import React, { useState, useRef, useLayoutEffect } from 'react';
import TextTruncate from 'react-text-truncate';
import { ReactComponent as RulerIcon } from '../assets/icons/ruler.svg';
import { ReactComponent as BedIcon } from '../assets/icons/bed.svg';
import { ReactComponent as BathtubIcon } from '../assets/icons/bath-tub.svg';

export function FlatCard(props) {
  const [dimensions, setDimensions] = useState({});
  const cardRef = useRef();

  useLayoutEffect(() => {
    setDimensions({
      width: cardRef.current.getBoundingClientRect().width,
      height: cardRef.current.getBoundingClientRect().height
    });
  }, [])

  if (dimensions.width > 330) {
    return (
      <div className="flat-card" ref={cardRef}>
        <div className="fc-img" style={{ backgroundImage: `url(${props.imagesURL})` }}/>
        <div className="fc-info">
          <div className="info-header">
            <TextTruncate 
              line={1}
              element='h3'
              text={props.title}
            />
  
            <div className="info-header-flex">
              <div className="flex-icon">
                <RulerIcon />
                <p>{props.floorArea} m2</p>
              </div>
              <div className="flex-icon">
                <BedIcon />
                <p>{props.numberOfBedrooms} habitaciones</p>
              </div>
              <div className="flex-icon">
                <BathtubIcon />
                <p>{props.numberOfBathrooms} baños</p>
              </div>
            </div>
  
          </div>
          <div className="card-separator" />
          <div className="fc-description">
            <TextTruncate 
              line={5}
              element='p'
              truncateText=' . . .'
              text={props.description}
            />
          </div>
          <div className="fc-footer">
            <h5>{props.price}€/mes</h5>
            <h5 className="flat-location">BARCELONA - {props.location}</h5>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flat-card flat-card-s" ref={cardRef}>
        <div className="fc-img fc-img-s" style={{ backgroundImage: `url(${props.imagesURL})` }}/>
        <div className="fc-info fc-info-s">
          <div className="info-header">
            <TextTruncate 
              line={1}
              element='h3'
              text={props.title}
            />

            <div className="info-header-flex">
              <div className="flex-icon">
                <RulerIcon />
                <p>{props.floorArea} m2</p>
              </div>
              <div className="flex-icon">
                <BedIcon />
                <p>{props.numberOfBedrooms} hab</p>
              </div>
              <div className="flex-icon">
                <BathtubIcon />
                <p>{props.numberOfBathrooms} WC</p>
              </div>
            </div>
  
          </div>
          <div className="card-separator" />
          <div className="fc-description">
            <TextTruncate 
              line={2}
              element='p'
              truncateText=' . . .'
              text={props.description}
            />
          </div>
          <div className="fc-footer fc-footer-s">
            <h5>{props.price}€/mes</h5>
            <h5 className="flat-location">BARCELONA - {props.location}</h5>
          </div>
        </div>
      </div>
    )
  }
};

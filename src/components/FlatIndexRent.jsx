import React, { useState, useEffect } from 'react';
import { FlatCard } from './FlatCard';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export function FlatIndexRent() {
  const [flats, setFlats] = useState([]);
  const [count, setCount] = useState(0);

  const location = useLocation();
  
  const getData = () => {
    axios.get('https://paso-a-piso.herokuapp.com/api/flats')
      .then(async (res) => {
        let count = 0;
        // Storing count of flats in State to display it on the title
        res.data.map(flat => flat.rentFlat && count ++);
        //\
        const flatData = await res.data;
        setFlats(flatData);
        setCount(count++);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return(
    <div className="container">
      <h1 className="page-title">{count} propiedades en Barcelona</h1>
      <div className="title-underline" />
      {(flats.length === 0) && <div className="loading-div"><h2 style={{fontWeight: 400}}>Cargando pisos</h2></div>}
      <div className="cards-container"> 
        { 
        flats.map(flat => (
          flat.rentFlat &&
            <Link to={`/api/flats/${flat._id}`} key={flat._id}>
              <FlatCard 
                title={flat.title}
                description={flat.description}
                price={flat.price}
                location={flat.location}
                floorArea={flat.floorArea}
                numberOfBedrooms={flat.numberOfBedrooms}
                numberOfBathrooms={flat.numberOfBathrooms}
                imagesURL={flat.imagesURL[0]}
              />
            </Link>
        ))
        }
      </div>
    </div>
  );
}
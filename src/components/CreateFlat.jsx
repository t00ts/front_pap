import React, { useState } from 'react';
import axios from 'axios';

export function CreateFlat() {
  const [flat, setFlat] = useState({
    title: '',
    description: '',
    location: '',
    floorArea: '',
    numberOfBedrooms: '',
    numberOfBathrooms: '',
    rentFlat: false,
    buyFlat: false
  });
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const imagesURL = [];
  
  const handleInput = (e) => {
    setFlat({ ...flat, [e.target.id]: e.target.value });
  }

  const handleCheckbox = (e) => {
    e.target.checked ? setFlat({...flat, [e.target.id]: true}) : setFlat({...flat, [e.target.id]: false})
  }

  const saveDB = () => {
    axios.post('https://paso-a-piso.herokuapp.com/api/flats', {
      title: flat.title,
      price: flat.price,
      description: flat.description,
      location: flat.location,
      floorArea: flat.floorArea,
      numberOfBedrooms: flat.numberOfBedrooms,
      numberOfBathrooms: flat.numberOfBathrooms,
      imagesURL: imagesURL,
      rentFlat: flat.rentFlat,
      buyFlat: flat.buyFlat
    })
    .then(res => console.log(res))
    .catch(err => console.log(err.response))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    //Loop through images state array and uploading each of the images to Cloudinary
    for(let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.set('file', images[i]);
      formData.append('upload_preset', 'pasoAPiso');
      await axios.post('https://api.cloudinary.com/v1_1/dinkluxtp/image/upload', formData)
        .then(async (res) => {
          const response = await res.data.secure_url;
          imagesURL.push(response)
        })
        .catch(err => console.log(err.response))
    };
    
    saveDB();

    setFlat({
      title: '',
      description: '',
      location: '',
      floorArea: '',
      numberOfBedrooms: '',
      numberOfBathrooms: '',
      imagesURL: imagesURL,
      price: '',
    })
    setIsLoading(false);
  }

  return(
    <div className="container">
      <h1 className="page-title">Crea un piso</h1>
      <div className="title-underline" />
      <form className="create-flat-form" onSubmit={handleSubmit}>
        <input id="title" className="create-flat-title" value={flat.title} type="text" onChange={handleInput} placeholder="Nombre del piso" />
        <input id="price" value={flat.price} type="number" onChange={handleInput} placeholder="Precio" />
        <textarea id="description" className="create-flat-description" value={flat.description} onChange={handleInput} maxLength="1000" placeholder="Descripción" />
        <input id="floorArea" value={flat.floorArea} type="number" onChange={handleInput} placeholder="Tamaño" />
        <input id="numberOfBathrooms" value={flat.numberOfBathrooms} type="number" onChange={handleInput} placeholder="Número de baños" />
        <input id="numberOfBedrooms" value={flat.numberOfBedrooms} type="number" onChange={handleInput} placeholder="Número de habitaciones" />
        <input id="location" type="text" value={flat.location} onChange={handleInput} placeholder="Localización" />
        <div className="create-flat-checkboxes">
          <input id="rentFlat" className="flat-checkbox" type="checkbox" onChange={handleCheckbox} />
          <label htmlFor="rentFlat">Alquiler</label>
          <input id="buyFlat" className="flat-checkbox" type="checkbox" onChange={handleCheckbox} />
          <label htmlFor="buyFlat">Venta</label>
        </div>
        <button type="submit" className="form-btn">Crear</button>
      </form>
        <input className="images-input" type="file" onChange={(e) => setImages(e.target.files)} multiple/>
        
        { isLoading && <div className="loading-div"><h2 style={{fontWeight: 400}}>Cargando pisos</h2></div> }
    </div>
  );
}
import React from 'react';
import { Row } from 'react-bootstrap';
import './GalleryImage.css'

const GalleryImage = (props) => {
  return (
    <Row className='justify-content-center'>
      {props.images.map((image, idx) => 
        <div key={idx} className='gallery-img'>
          <img src={image.url} alt={image.name}/>
          <p>{image.name}</p>
        </div>
      )}
    </Row>
  );
}

export default GalleryImage;
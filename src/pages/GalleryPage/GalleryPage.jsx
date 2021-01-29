import React from 'react';
import { Container } from 'react-bootstrap';
import { Header } from '../../components/helpers/Header';
import './GalleryPage.css'

const GalleryPage = ({images}) => {
  return (
    <Container>
      <Header 
        title='Gallery'
      />
      <div class="gallery-container">
        {images.map((image, i) => 
          <div class="gallery-pic-wrapper">
            <img class="gallery-pic" src={image}  alt="Fern"/>
          </div>
        )}
      </div>
    </Container>
  );
}

export default GalleryPage;
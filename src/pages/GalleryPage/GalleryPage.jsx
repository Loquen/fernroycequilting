import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GalleryImage from '../../components/GalleryImage/GalleryImage'
import GalleryFilter from '../../components/GalleryFilter/GalleryFilter'

const GalleryPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>Gallery Page!</h1>
      </Jumbotron>
      <GalleryFilter 
        categories={['Strings', 'Wool', 'Stars']}
      />
      <GalleryImage />
    </Container>
  );
}

export default GalleryPage;
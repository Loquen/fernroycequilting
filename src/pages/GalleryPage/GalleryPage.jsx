import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GalleryImage from '../../components/GalleryImage/GalleryImage'
import GalleryFilter from '../../components/GalleryFilter/GalleryFilter'

const GalleryPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className='title'>Gallery Page!</h1>
      </Jumbotron>
      <GalleryFilter 
        categories={['Strings', 'Wool', 'Stars']}
      />
      <GalleryImage 
        images={[{name: 'quilt A', url:'https://placebear.com/g/300/300', category: 'wool'},
                 {name: 'quilt B', url:'https://placebear.com/g/300/300', category: 'strings'},
                 {name: 'quilt C', url:'https://placebear.com/g/300/300', category: 'stars'},
                 {name: 'quilt D', url:'https://placebear.com/g/300/300', category: 'wool'},
                 {name: 'quilt E', url:'https://placebear.com/g/300/300', category: 'strings'},
                 {name: 'quilt F', url:'https://placebear.com/g/300/300', category: 'stars'}]}
      />
    </Container>
  );
}

export default GalleryPage;
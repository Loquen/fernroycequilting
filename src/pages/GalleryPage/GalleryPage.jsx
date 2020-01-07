import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import GalleryImage from '../../components/GalleryImage/GalleryImage';
import GalleryFilter from '../../components/GalleryFilter/GalleryFilter';
import imageService from '../../utils/imageService';

class GalleryPage extends Component {

  state = {
    images: []
  }

  async componentDidMount() {
    const images = await imageService.getAll();

    this.setState({images});
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className='title'>Gallery</h1>
        </Jumbotron>
        <GalleryFilter 
          categories={['Strings', 'Wool', 'Stars']}
        />
        <GalleryImage 
          images={this.state.images}
        />
      </Container>
    );
  }
}

export default GalleryPage;
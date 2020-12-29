import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../components/helpers/Header';
import './GalleryPage.css'

const GalleryPage = () => {
  return (
    <Container>
      <Header 
        title='Gallery'
      />
      <Row className="mb-4">
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="event.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="event2.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="event3.jpg"  alt="Fern"/>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="event4.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="cabin.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="gall.jpg"  alt="Fern"/>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="gallery.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="gallery2.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="gallery3.jpg"  alt="Fern"/>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="gallery5.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="workshop5.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="workshop.jpg"  alt="Fern"/>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="workshop2.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="workshop3.jpg"  alt="Fern"/>
        </Col>
        <Col md={4} xs={12}>
          <img id="fern-profile-pic" src="workshop4.jpg"  alt="Fern"/>
        </Col>
      </Row>
            
    </Container>
  );
}

export default GalleryPage;
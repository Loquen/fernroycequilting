import React, {Component} from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Header } from '../../components/helpers/Header';
import SubscribePage from '../../components/SubscribePage/SubscribePage';
import Highlight from '../../components/Highlight/Highlight';
import './HomePage.css'

class HomePage extends Component {
  state = {
    highlights: [
      {
        title: 'Gallery',
        img: 'gallery.jpg',
        link: 'gallery'
      },
      {
        title: 'Events',
        img: 'event2.jpg',
        link: '/event'
      },
      {
        title: 'Lectures',
        img: 'workshop6.jpg',
        link: '/lecture'
      },
    ]
  };

  render() {
    return (
      <Container>
        <Header 
          title='Welcome to Fern Royce Quilting'
        />

        <div>
          <Row>
            <Col className='pb-5 mx-auto d-block' >
              <img id="fern-profile-pic" src="fern_headshot.jpg"  alt="Fern"/>
            </Col>
            <Col md={8} xs={12}>
              <p>
              I was born and raised in Northern California, surrounded by sewing, textiles and quilts.
              </p>
              <p>
                When I was very young we lived with my maternal grandparents in Paradise, CA. 
                It was there that I got my first peek into my grandmother’s sewing room – filled 
                to the ceiling with boxes and tins of fabrics, buttons and notions.
              </p>
              <p>
                I took my first quilting class in 1995 at New Pieces in Berkeley with 
                Johyne Geran. One of her opening statements was “Once you start quilting 
                you won’t be able to stop”….. I was skeptical but she was right.
              </p>
            </Col>
          </Row>
        
          <Row>
            {this.state.highlights.map((highlight, i) => 
              <Col md={4} xs={12}>
                <Highlight props={highlight} />
              </Col>
            )}
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} xs={12}>
              <h1 className="text-center">Join my mailing list!</h1>
              <SubscribePage />
            </Col>
          </Row>
        </div>
        <div className='home-btn-group'>
          <Button href='/contact'>Contact Me!</Button>
          <Button href='/event'>Events!</Button>
          <Button href='/lecture'>Lectures!</Button>
        </div>
      </Container>
    );
  }
}

export default HomePage;
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Header } from '../../components/helpers/Header';
import './AboutPage.css'

const AboutPage = () => {
  return (
    <Container>
      <Header 
        title='About Me'
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
              That same grandmother bought me and my sisters a treadle sewing machine
              for $12.50 when I was 10 and I’ve been sewing ever since – although now 
              I use an electric sewing machine.
            </p>
            <p>
              My sisters will be the first to tell you that, as much as I loved fabric, 
              I had a very difficult time cutting into it. My younger sister did not 
              suffer from that hesitation – she would be wearing her new outfit while 
              I was still “petting” my fabric. She, of course, thinks it’s quite funny 
              that I now cut up fabric as a living!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              I took my first quilting class in 1995 at New Pieces in Berkeley with 
              Johyne Geran. One of her opening statements was “Once you start quilting 
              you won’t be able to stop”….. I was skeptical but she was right.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Many more classes followed that first one with such quilting notables 
              as Roberta Horton, Mary Mashuta and Freddy Moran. Best of all, I was 
              able to take those classes without leaving town!
            </p>
            <p>
              Early in my quilting career I found Gwen Marston’s books and followed 
              her sharp left turn onto the Liberated Quilting path. I am grateful 
              that I was able to attend the last two years of her 30 years of Beaver 
              Island Retreats in Michigan. She is my biggest inspiration.
            </p>
            <p>
              Here I am, 21 years later, still quilting, still cutting up fabric 
              and now teaching others to do the same! I hope that I can inspire and 
              encourage my students as much as my teachers inspired me. It is an 
              honor to be part of and carrying forward the long tradition of quiltmaking.
            </p>
          </Col>
        </Row>
      </div>
      <div className='about-btn-group'>
        <Button href='/contact'>Say Hi!</Button>
      </div>
    </Container>
  );
}

export default AboutPage;
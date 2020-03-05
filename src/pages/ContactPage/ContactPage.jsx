import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <Jumbotron className='title'>
        <h1>Contact Me!</h1>
        <p>
          Send me an email to schdule a lecture at your guild, 
          local quilt store or just say hello!
        </p>
      </Jumbotron>
      <ContactForm/>
      <hr/>
    </Container>
  );
}

export default ContactPage;
import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Header } from '../../components/helpers/Header';

const ContactPage = () => {
  return (
    <Container>
      <Header 
        title='Contact Me!'
        body={'Send me an email to schdule a lecture at your guild, local quilt store or just say hello!' }
      />
      <ContactForm/>
      <hr/>
    </Container>
  );
}

export default ContactPage;
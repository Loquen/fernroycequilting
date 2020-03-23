import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Header } from '../../components/helpers/Header';

const ContactPage = () => {
  return (
    <Container>
      <Header 
        title='Contact Me!'
      />
      <ContactForm/>
      <hr/>
    </Container>
  );
}

export default ContactPage;
import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import EventForm from '../../components/UploadForms/EventForm';

const UploadPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className='title'>Upload Page!</h1>
      </Jumbotron>
      <EventForm />
    </Container>
  );
}

export default UploadPage;
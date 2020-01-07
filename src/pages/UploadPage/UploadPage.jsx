import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import EventForm from '../../components/UploadForms/EventForm';
import WorkshopForm from '../../components/UploadForms/WorkshopForm';
import ImageForm from '../../components/UploadForms/ImageForm';

const UploadPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className='title'>Upload Page</h1>
      </Jumbotron>
      <EventForm />
      <WorkshopForm />
      <ImageForm />
    </Container>
  );
}

export default UploadPage;
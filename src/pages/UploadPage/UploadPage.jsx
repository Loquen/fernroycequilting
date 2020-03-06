import React from 'react';
import { Container, Jumbotron, Tabs, Tab } from 'react-bootstrap';
import EventForm from '../../components/UploadForms/EventForm';
import WorkshopForm from '../../components/UploadForms/WorkshopForm';

const UploadPage = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className='title'>Upload Page</h1>
      </Jumbotron>
      
      <Tabs defaultActiveKey="event" id="upload-tab">
        <Tab eventKey="event" title="Event">
          <EventForm />
        </Tab>
        <Tab eventKey="workshop" title="Workshop">
          <WorkshopForm />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default UploadPage;
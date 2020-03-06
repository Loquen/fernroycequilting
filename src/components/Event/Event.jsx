import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import './Event.css';

const Event = ({id, name, url, date, location, details, user, handleDelete}) => {
  const fdate = moment(date, moment.ISO_8601).format('MMMM Do, YYYY');
  return (
    <Row className='spacer'>
      <Col>
        <img src={url} alt="Event"/>
      </Col>
      <Col className='description'>
        <h3>{name}</h3>
        <h5>{fdate}</h5>
        <h6>{location}</h6>
        <p>{details}</p>
        { user ? <Button onClick={(e) => handleDelete(e, id)}>Delete</Button> : null }
      </Col>
    </Row>
  );
}

export default Event;

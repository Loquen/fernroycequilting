import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import './Event.css';

const Event = ({id, name, url, date, time, location, details, user, handleDelete}) => {
  const fdate = moment(date, moment.ISO_8601).format('MMMM Do, YYYY');
  const hrMin = time.split(':');
  let ftime; 

  if(time >= 12) {
    const ampm = 'PM';
    ftime = `${Number(hrMin[0]) - 12} ${ampm}`
  } else {
    ftime = `${time} AM`
  }

  return (
    <Row className='spacer'>
      <Col md={4} >
        <img className='image-size' src={url} alt="Event"/>
      </Col>
      <Col md={8} className='description'>
        <h3>{name}</h3>
        <h5>{fdate} at {ftime}</h5>
        <h6>{location}</h6>
        <p>{details}</p>
        { user ? <Button onClick={(e) => handleDelete(e, id)}>Delete</Button> : null }
      </Col>
    </Row>
  );
}

export default Event;

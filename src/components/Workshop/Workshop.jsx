import React from 'react';
import './Workshop.css';
import { Button, Col, Row } from 'react-bootstrap';

const Workshops = ({id, title, url, details, user, handleDelete}) => {
  return (
    <Row className='spacer'>
      <Col>
        <img src={url} alt='Workshop'/>
      </Col>
      <Col className='description'>
        <h2>{title}</h2>
        <p>{details}</p>
        { user ? <Button onClick={(e) => handleDelete(e, id)}>Delete</Button> : null }
      </Col>
    </Row>
  );
}

export default Workshops;
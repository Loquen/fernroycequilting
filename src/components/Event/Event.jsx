import React from 'react';
import { Button } from 'react-bootstrap';
import './Event.css';

const Event = ({id, name, url, date, location, details, user, handleDelete}) => {
  return (
    <div className='containers'>
      <img src={url} alt="Event"/>
      <p>{details}</p>
      { user ? <Button onClick={(e) => handleDelete(e, id)}>Delete</Button> : null }
    </div>
  );
}

export default Event;

import React from 'react';
import './Workshop.css';
import { Button } from 'react-bootstrap';

const Workshops = ({id, title, url, details, user, handleDelete, handleUpdate}) => {
  return (
    <div className='containers'>
      <img src={url} alt='Workshop'/>
      <p>{details}</p>
      {
        user ?
        (
          <div>
            <Button onClick={(e) => handleDelete(e, id)}>Delete</Button>
            <Button onClick={(e) => handleUpdate(e, id)}>Update</Button>
          </div>
        )
        : null
      }
    </div>
  );
}

export default Workshops;
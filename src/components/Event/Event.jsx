import React from 'react';
import './Event.css';

const Event = (props) => {
  return (
    <div className='containers'>
      <img src={props.url} alt="Event"/>
      <p>{props.details}</p>
    </div>
  );
}

export default Event;
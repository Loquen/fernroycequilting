import React from 'react';
import './Workshop.css';

const Workshops = (props) => {
  return (
    <div className='containers'>
      <img src={props.url} alt='Workshop'/>
      <p>{props.details}</p>
    </div>
  );
}

export default Workshops;
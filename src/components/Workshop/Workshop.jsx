import React from 'react';

const Workshops = (props) => {
  return (
    <div>
      <img src={props.url} alt="Workshop"/>
      <p>{props.details}</p>
    </div>
  );
}

export default Workshops;
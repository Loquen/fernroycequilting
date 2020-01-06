import React from 'react';

const Event = (props) => {
  return (
    <>
      <img src={props.url} alt="Event"/>
      <p>{props.details}</p>
    </>
  );
}

export default Event;
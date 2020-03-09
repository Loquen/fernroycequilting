import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Header = ({title, body}) => {

  const style = {
    backgroundImage: 'url(background.jpg)',
    color: 'white',
    textAlign: 'center'
  }

  return(
    <Jumbotron style={style}>
      <h1 className='title'>{title}</h1>
      <p><b><em>{body}</em></b></p>
    </Jumbotron>
  )
}
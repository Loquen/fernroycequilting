import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Header = ({title, body}) => {

  const style = {
    // backgroundImage: 'url(background.jpg)',
    color: 'rgb(60,60,60)',
    textAlign: 'center',
    fontFamily: 'Niconne'
  }

  return(
    <Jumbotron style={style}>
      <h1 className='display-1'>{title}</h1>
      <p><b><em>{body}</em></b></p>
    </Jumbotron>
  )
}
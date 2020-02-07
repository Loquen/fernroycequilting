import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='insta'>Instagram Feed</div>
      <div className='subscribe'>
        <input type='email' placeholder='email'/>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Footer;
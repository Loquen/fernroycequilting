import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='insta'>
        <a href='https://instagram.com/fern_royce'>
          <img src="four_patch.jpg" alt="four patch quilt"/>  
          <img src="american_quilter.jpg" alt="four patch quilt"/>  
          <img src="pastel_blue.jpg" alt="four patch quilt"/>  
          <img src="pin_cushion.jpg" alt="four patch quilt"/>  
        </a>
      </div>
      <div className='subscribe'>
        <p>Subscribe to my mailing list to stay up to date!</p>
        <input type='email' placeholder='Enter your email'/>
        <Button>Subscribe</Button>
      </div>
    </div>
  );
}

export default Footer;
import React from 'react';
import './Footer.css';
import SubscribePage from '../SubscribePage/SubscribePage';

function Footer(props) {
  return (
    <div className='footer'>
      <div className='insta'>
        <a href='https://instagram.com/fern_royce'>
          <img src="four_patch.jpg" alt="four patch quilt"/>  
          <img src="american_quilter.jpg" alt="American quilter book"/>  
          <img src="pastel_blue.jpg" alt="pastel blue quilt"/>  
          <img src="pin_cushion.jpg" alt="pin cushion"/>  
        </a>
      </div>
      <div className='subscribe'><div>
        <SubscribePage />
      </div>
      </div>
    </div>
  );
}

export default Footer;
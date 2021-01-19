import React from 'react';
import './Footer.css';
import SubscribePage from '../SubscribePage/SubscribePage';

function Footer(props) {
  return (
    <div>
      <div className='footer'>
        <div className='insta'>
          <a href='https://instagram.com/fern_royce'>
            <img src='four_patch.jpg' alt='four patch quilt'/>  
            <img src='american_quilter.jpg' alt='American quilter book'/>  
            <img src='pastel_blue.jpg' alt='pastel blue quilt'/>  
            <img src='pin_cushion.jpg' alt='pin cushion'/>  
          </a>
        </div>
        <div className='social'>
          <h5>Follow me on social media:</h5>
          <div>
            <a className='App-link' href='https://www.pinterest.com/fernroyce/'><i className='fa fa-pinterest fa-3x'/></a>
            <a className='App-link' href='https://www.facebook.com/fernroycequilts/'><i className='fa fa-facebook fa-3x' /></a>
            <a className='App-link' href='https://www.instagram.com/fern_royce'><i className='fa fa-instagram fa-3x'/></a>
          </div>
        </div>
        <div className='subscribe'>
          <SubscribePage />
        </div>
      </div>
      <div className='copyright'>
        © {props.getYear()} <a href='https://github.com/Loquen'>Loquen Jones</a>
      </div>
    </div>
  );
}

export default Footer;
import React from 'react';
import './Highlight.css';

const Highlight = (props) => {
  const style = {
    background: `url(${props.props.img}) no-repeat center`,
    backgroundSize: 'cover',
    textAlign: 'center',
    height: '20rem',
    width: '100%',    
  }
  return (
    <a className="highlight" style={style} href={props.props.link}>
      <div className="highlight-text">
        {props.props.title}
      </div>
    </a>
  );
};

export default Highlight;
import React from 'react';
import './Highlight.css';

const Highlight = (props) => {
  const style = {
    background: `url(${props.props.img}) no-repeat center`,
    backgroundSize: 'contain',
    textAlign: 'center',
    height: '20rem',
    width: '100%',    
  }
  return (
    <div className="highlight" style={style}>
      <div className="highlight-text">
        {props.props.title}
      </div>
    </div>
  );
};

export default Highlight;
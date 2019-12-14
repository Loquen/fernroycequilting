import React from 'react';

const GalleryImage = (props) => {
  return (
    <div>
      {props.images.map(image => 
        <div>
          <img src={image.url} alt={image.name}/>
          <p>{image.name}</p>
        </div>
      )}

    </div>
  );
}

export default GalleryImage;
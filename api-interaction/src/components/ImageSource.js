import React from 'react';
import '../App.css';

const ImageSource = ({image}) => {
  return (
    <div className='image-body'>
      <div className='image-wrapper'><img src={image.urls.small} alt={image.alt_description} /></div>
    </div>
  );
};

export default ImageSource;
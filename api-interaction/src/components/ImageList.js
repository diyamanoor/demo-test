import React from 'react';
import ImageSource from './ImageSource';

const ImageList = ({ images }) => {
  const renderedImages = images.map((image,index) => {
    return <ImageSource key={index} image={image} />;
  });

  return (
    <div>
      <h1>{renderedImages}</h1>
    </div>
  );
};

export default ImageList;

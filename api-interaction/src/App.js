import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchImages from './api';
import ImageList from './components/ImageList';
import NewPage from './components/newDemo';


const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const imageSearchResults = await SearchImages(term);
    setImages(imageSearchResults);
  }

  return (
    <div>
      <h2>API Demo</h2>
      <div><SearchBar onSubmit={handleSubmit} /></div>
      <div><ImageList images={images} /></div>
      <div><NewPage/></div>

    </div>
  );
};

export default App;

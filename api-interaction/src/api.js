import React from 'react';
import axios from 'axios';

const SearchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 577XgKNTdUF4z3XQ7pySlfz5uTCv5okBw_3EPlrhdjA'
    },
    params: {
      query: term
    }
  });

  return response.data.results;

};


export default SearchImages;
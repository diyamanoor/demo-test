import React, {useState} from 'react';
 

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    
  }
  const handleChange = (event) => { 
    setTerm(event.target.value);

  }


  return (
    <div>
      <h4>Enter Search term </h4>
      <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleChange} value={term}/>
      </form>
    </div>
  );
};

export default SearchBar;
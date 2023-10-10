import React, { useState } from 'react';

function SearchBar({ placeholder, data, onSearchResults }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (Array.isArray(data)) {
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      setFilteredData(newFilter);
    } else {
      console.error("data is not an array.");
    }
  };

  const handleSelect = (selectedItem) => {
    setWordEntered(selectedItem.name);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetch(`/search?term=${wordEntered}`)
        .then((response) => response.json())
        .then((data) => {
          if (typeof onSearchResults === 'function') {
            onSearchResults(data.recipes);
          }
        })
        .catch((error) => {
          console.error("Error al buscar recetas.", error);
        });
    }
  };

  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-md-6'>
        <div className='form'>
          <i className='fa fa-search'></i>
          <input
            type='text'
            placeholder={placeholder}
            className='form-control form-input'
            value={wordEntered}
            onChange={handleFilter}
            onKeyPress={handleKeyPress} 
          />
        </div>
        {filteredData.length !== 0 && (
          <div className='dataresult'>
            {filteredData.slice(0, 15).map((value, index) => {
              return (
                <div
                  className='list border-bottom'
                  key={index}
                  onClick={() => handleSelect(value)}
                >
                  <div className='d-flex flex-column ml-3'>
                    <span>{value.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

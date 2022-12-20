import React from 'react';
import './Search.css'

const Search = ({ setSearch, setPageNumber }) => {
    let searchBtn = (e) => {
      e.preventDefault();
    };
    return (
      <form
        className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 my-4' 
      >
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          className='p-2 rounded character-search'
          type="text"
        />
        <button
          onClick={searchBtn}
          className='btn btn-primary'
        >
          Search
        </button>
      </form>
    );
  };

export default Search
import React, { useState } from 'react';
import { storeTerm } from '../../actions/store-terms';
import { updateArticles } from '../../actions/update-articles';
import { useDispatch } from 'react-redux';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const handleSearch = (ev) => {
    ev.preventDefault();
    setError(null);
    const url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}`;
    fetch(url, {
      method: 'GET',
      'content-type': 'application/json'
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Request failed')
      }
      return res.json();
    })
    .then(res => {
      dispatch(updateArticles([...res.hits]))
    })
    .catch(err => {
      setError(err.message)
    });
  }

  return (
    <form className='search-bar-form' onSubmit={handleSearch} >
      <label><input type='text' className='searchTerm' required value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/></label>
      <button type='submit' className='submit-search-button' onClick={() => dispatch(storeTerm(searchTerm))}>Search Articles</button>
      <p className='error-message'>{error}</p>
    </form>
  )
}

export default SearchBar;

 
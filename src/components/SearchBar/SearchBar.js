import React, { useState } from 'react';
import { storeTerm } from '../../actions/store-terms';
import { updateArticles } from '../../actions/update-articles';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const handleSearch = (ev) => {
    ev.preventDefault();
    setError(null);
    dispatch(storeTerm(searchTerm))
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
      <label className='form-label' htmlFor='searchTerm'>Search for: </label>
      <input type='text' className='searchTerm' name='searchTerm' required value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
      <button type='submit' className='submit-search-button'>Search Articles</button>
      <p className='error-message'>{error}</p>
    </form>
  )
}

export default SearchBar;

 
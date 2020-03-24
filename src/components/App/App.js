import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';

function App() {
  return (
    <main className="App">'
      <header className='app-title'>
        <h1>Hacker News Article Search</h1>
      </header>
      <div className='search-fields'>
        <SearchBar />
      </div>
      <div className='results-area'>
        <ResultsList />
      </div>
    </main>
  );
};

export default App;


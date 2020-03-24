import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { useSelector } from 'react-redux' ;
import './ResultsList.css';

const ResultsList = () => {
  const articles = useSelector(state => state.articlesReducer)
  const results = articles.map((article, index) => 
    <ResultItem key={index} article={article} />
  ) 
  return (
    <ul className='articles-list'>
      {results}
    </ul>
  )
}


export default ResultsList

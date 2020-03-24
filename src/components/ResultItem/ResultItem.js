import React from 'react'
import './ResultItem.css'

const ResultItem = ({ article }) => {
  return (
    <li className='result-item'>
      <a href={article.url} target='_blank' rel="noopener noreferrer">
        <h3>{article.title}</h3>
      </a>
      <div className='article-data'>
        <span className='points'>{article.points} points</span>
        <span className='author'>By: {article.author}</span>
        <span className='publish-date'>Published: {article.created_at}</span>
      </div>
    </li>
  )
}

export default ResultItem;
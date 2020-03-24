import React from 'react'

const ResultItem = ({ article }) => {
  return (
    <li className='result-item'>
      <a href={article.url} target='_blank' rel="noopener noreferrer">
        <h3>{article.title}</h3>
      </a>
      <span className='author'>{article.author}</span>
      <span className='publish-date'>{article.created_at}</span>
    </li>
  )
}

export default ResultItem;
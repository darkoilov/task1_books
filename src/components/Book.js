import React from 'react'
import './styles/book.css';

const Book = (props) => {
  return (
    <div key={props.i} className="book">
      <div className='book_inside'>
        <h2 className="book__title">{props.title}</h2>
        <p className="book__author">{props.author}</p>
        <p className="book__genre">{props.genre}</p>
      </div>
    </div>
  )
}

export default Book;

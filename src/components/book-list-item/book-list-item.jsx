import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;

  return (
    <li className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a className="book-title" href="/">
          { title }
        </a>
        <div className="book-author">{ author }</div>
        <div className="book-price">${ price }</div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </li>
  );
};

export default BookListItem;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function Booklist() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://reactnd-books-api.udacity.com/books',
          {
            headers: {
              Authorization: 'whatever-you-want',
            },
          }
        );
        console.log(response);
        const fetchedBooks = response.data.books;
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

return (
  <>
    {books.map((book) => (
      <div className="book-cards" key={book.id}>
        <div className="image-container">
          <img src={book.imageLinks.thumbnail} alt={book.title} className="book-image" />
        </div>
        <div className="text-container">
          <h1 className="book-title">{book.title}</h1>
          <h3 className="book-authors">By {book.authors}</h3>
          <article className="book-description">{book.description}</article>
        </div>
      </div>
    ))}
  </>
);
}

export default Booklist;

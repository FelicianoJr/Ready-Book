import React from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import BookDetail from './BookDetail'

const SearchBooks = ({ bookSearch, onSearchBook, update }) => {

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"></Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="400" handler="onChange">
                            <input
                                type='text'
                                placeholder='search by title or author'
                                onChange={event => onSearchBook(event.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {bookSearch.map(book => {
                            return <BookDetail key={book.id} book={book} update={update} />
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
};

export default SearchBooks;
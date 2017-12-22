import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const ListReadBooks = ({ books = [], update, titles = [], clearBook }) => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {titles.map(title => {
                        return <BookShelf key={title} books={books}
                            title={title} update={update} />
                    })}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search" onClick={() => clearBook()} ></Link>
            </div>
        </div>
    )
};

export default ListReadBooks;
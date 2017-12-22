import React from 'react'
import BookDetail from './BookDetail'

const BookShelf = ({ books = [], update, title }) => {

    const currentBooks = books.filter(_ => _.shelf === title);

    const separateTitle = title.replace(/([A-Z])/g, ' $1').trim();
    
    const titleFinal = separateTitle.charAt(0).toUpperCase() + separateTitle.slice(1);

    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{titleFinal}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {currentBooks.map(book => {
                    return <BookDetail key={book.id} book={book} update={update} />
                })}
            </ol>
        </div>
    </div>
    )
};

export default BookShelf;
import React from 'react'

const SelectBookOptions = ({ book, update }) => {
    
    return (
        <select value={book.shelf}
            onChange={(event) => update(book, event.target.value)}>
            <option value="" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="">None</option>
        </select>
    )
};

export default SelectBookOptions;
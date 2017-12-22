import './App.css'
import React from 'react'
import ListReadBooks from './component/ListReadBooks'
import SearchBooks from './component/SearchBooks'
import { Route } from 'react-router-dom';
import * as  BooksAPI from './util/BooksAPI'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bookSearch: [],
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      if (books) {
        this.setState({ books, bookSearch: [] });
      }
    }).catch(error => {
      this.setState({ books: [], bookSearch: [] });
    });;
  }

  search = (query) => {
    BooksAPI.search(query).then(resp => {
      const bookSearch = this.updateBookSearch(resp);
      this.setState({ bookSearch });
    }).catch(error => {
      this.setState({ bookSearch: [] });
    });
  };

  updateBookSearch = (resp) => {
    resp.map(bookSearch => {
      this.state.books.forEach((book) => {
        if (bookSearch.id === book.id) {
          bookSearch.shelf = book.shelf
        }
      });
    });
    return resp;
  };

  updateBook = (book, shelf) => {
    if (shelf) {
      BooksAPI.update(book, shelf).then(res => {
        book.shelf = shelf;
        this.updateState(book);
      });
    }
  };

  updateState(book) {
    const bks = this.filterNewBooks(book);
    this.setState(state => {
      state.books = bks.concat([book]);
    });
  }

  filterNewBooks(book) {
    return this.state.books.filter((bk) => bk.id !== book.id);
  }

  separateShelfs() {
    const set = new Set();
    this.state.books.forEach(book => {
      set.add(book.shelf)
    });
    return Array.from(set);
  }

  clearBooks = () => {
    if (this.state.bookSearch) {
      this.setState({ bookSearch: [] });
    }
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListReadBooks
            books={this.state.books}
            titles={this.separateShelfs()}
            update={this.updateBook}
          />
        )} />
        }

        <Route path="/search" render={({ history }) => (
          <SearchBooks
            bookSearch={this.state.bookSearch}
            onSearchBook={this.search}
            update={this.updateBook}
            clearBooks={this.clearBooks}
          />
        )} />

      </div>
    )
  }
}

export default App

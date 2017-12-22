import React from 'react';
import App from '../App';
import ListReadBooks from '../component/ListReadBooks'
import SearchBooks from '../component/SearchBooks'
import { shallow, mount } from 'enzyme';
import BookShelf from '../component/BookShelf'
import toJson from 'enzyme-to-json';

import { MemoryRouter as Router } from 'react-router-dom';

describe("<App/>", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />)

    wrapper.setState({
      books: [{
        id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React', shelf: 'read'
      },
      {
        id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React Native', shelf: 'continueRead'
      }, {
        id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React Native', shelf: 'wantToRead'
      }, {
        id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React Native', shelf: 'read'
      }],
      bookSearch: [],
    });
  });

  afterEach(() => wrapper.setState({ books: [], bookSearch: [] }))


  // it('wo state [books, booksearch]', () => {
  //   const mountWithRouter = node => mount(<Router>{node}</Router>);
  //   const wrapper = mountWithRouter(<ListReadBooks />);
  //    console.log(mountWithRouter.);
  // })
  
  it('should length to be two state [books, booksearch]', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().books.length).toBe(4);
    expect(wrapper.state().bookSearch.length).toBe(0);
  })

  it('calls filter equal three books', () => {
    const book = {
      id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
      title: 'React', shelf: 'read'
    }
    expect(wrapper.instance().filterNewBooks(book).length).toBe(3);
  });

  it('should contain the self passed at equal object state bookSearch', () => {

    wrapper.setState({
      bookSearch: [{
        id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React', shelf: ''
      },
      {
        id: 4, imageLinks: { thumbnail: 'url/test/enzime' },
        title: 'React Native', shelf: ''
      }]
    })
    const bookSearch = wrapper.state().bookSearch;
    expect(wrapper.instance().updateBookSearch(bookSearch)[0].shelf).toEqual('read');
  });

  it('should contain zero with state bookSearch []', () => {
    wrapper.setState({ bookSearch: [] });
    const bookSearch = wrapper.state().bookSearch;
    expect(wrapper.instance().updateBookSearch(bookSearch).length).toBe(0);
  });

  it('should contain three only name with function separateShelfs()', () => {
    expect(wrapper.instance().separateShelfs().length).toBe(3);
  });

  it('should remove all bookSearch', () => {
    wrapper.instance().clearBooks();
    expect(wrapper.state().bookSearch.length).toBe(0);
  });

  it('has one <div>', () => {
    expect(wrapper.find('div').length).toBe(1)
  })
});


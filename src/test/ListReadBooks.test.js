import ListReadBooks from '../component/ListReadBooks'
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link } from 'react-router-dom';

describe("<ListReadBooks/>", () => {

    let update;
    let props;
    let titles = ['read', 'wantToRead', 'continueRead'];
    let clearBook;

    beforeEach(() => {
        update, clearBook = jest.fn();
        props = {
            books: [{
                id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React', shelf: 'read'
            },
            {
                id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React Native', shelf: 'read'
            }],
            update: update,
            titles: titles,
            clearBook: clearBook
        };
    })

    it("should render Link /search", () => {
        const wrapper = shallow(<ListReadBooks {...props} />)
        expect(wrapper.find(Link).props().to).toEqual('/search');
    });

    it('should render MyReads in h1', () => {
        const wrapper = shallow(<ListReadBooks {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.find('h1').text()).toEqual('MyReads');
    });

    it('should render five <div>', () => {
        const wrapper = shallow(<ListReadBooks {...props} />)
        expect(wrapper.find('div').length).toEqual(5);
    })

})
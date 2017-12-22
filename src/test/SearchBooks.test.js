import SearchBooks from '../component/SearchBooks'
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("<SearchBooks/>", () => {

    let update;
    let props;
    let wrapper;

    beforeEach(() => {
        update = jest.fn();
        props = {
            bookSearch: [{
                id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React', shelf: 'read'
            },
            {
                id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React Native', shelf: 'read'
            }],
            onSearchBook: update,
        };
        wrapper = shallow(<SearchBooks  {...props} />)
    });

    it('should render input equal one', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it("responds to name change", () => {
        wrapper.find('input').simulate('change', { target: { value: 'artificial' } });
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('should render one <ol/>', () => {
        expect(wrapper.find('ol').length).toEqual(1);
    });

})
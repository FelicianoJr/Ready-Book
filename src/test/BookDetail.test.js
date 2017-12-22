import BookDetail from '../component/BookDetail'
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("<BookDetail/>", () => {

    let update;
    let props;

    beforeEach(() => {
        update = jest.fn();
        props = {
            book: {
                id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React', shelf: 'read'
            },
            update: update,
        };
    });

    it("should contain the imageLinks passed as props", () => {
        const wrapper = mount(<BookDetail {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.props().book.imageLinks.thumbnail).toEqual('url/test/enzime');
    });

    it("should contain the Title passed as props", () => {
        const wrapper = mount(<BookDetail {...props} />)
        expect(wrapper.props().book.title).toEqual('React');
    });

    it('should render six <div>', () => {
        const wrapper = shallow(<BookDetail {...props} />)
        expect(wrapper.find('div').length).toEqual(6);
    });

    it('should render one <il>', () => {
        const wrapper = shallow(<BookDetail {...props} />)
        expect(wrapper.find('li').length).toEqual(1);
    });

})
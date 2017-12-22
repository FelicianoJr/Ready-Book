import BookShelf from '../component/BookShelf'
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("<BookShelf/>", () => {
    
    let update;
    let props;

    beforeEach(() => {
        update = jest.fn();
        props = {
            books: [{
                id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React', shelf: 'read'
            },
            {
                id: 1, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React Native', shelf: 'read'
            }],
            title: 'Read',
            update: update,
        };
    })

    it("should contain the title passed as props", () => {
        const wrapper = mount(<BookShelf {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(wrapper.props().title).toEqual('Read');
    });

    it("should contain length equal two in props array", () => {
        const wrapper = mount(<BookShelf {...props} />)
        expect(wrapper.props().books.length).toEqual(2);
    });

    it('should render two <div>', () => {
        const wrapper = shallow(<BookShelf {...props} />)
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('should render one <ol>', () => {
        const wrapper = shallow(<BookShelf {...props} />)
        expect(wrapper.find('ol').length).toEqual(1);
    });

})
import SelectBookOptions from '../component/SelectBookOptions'
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe("<SelectBookOptions/>", () => {

    let update;
    let props;
    let wrapper;

    beforeEach(() => {
        update = jest.fn();
        props = {
            book: {
                id: 0, imageLinks: { thumbnail: 'url/test/enzime' },
                title: 'React', shelf: 'read'
            },
            update: update,
        };
        wrapper = shallow(<SelectBookOptions {...props} />)
    })

    it('should render one <select>', () => {
        expect(wrapper.find('select').length).toEqual(1);
    });

    it("when simulating a change, select should update its value", () => {
        wrapper.find('select').simulate('change', { target: { value: '100' } });
        expect(toJson(wrapper)).toMatchSnapshot();
        expect(update).toHaveBeenCalledTimes(1)
    });

    it('should render five <option>', () => {
        expect(wrapper.find('option').length).toEqual(5);
    });

    it('should render text node <option>', () => {
        const text = wrapper.find('option').map(node => node.text());
        expect(text).toEqual(['Move to...', 'Currently Reading', 'Want to Read', 'Read', 'None'])
    })

})
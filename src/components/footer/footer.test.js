import React from 'react';
import { shallow } from 'enzyme';

import Footer from './index';
import { Style } from 'radium'

describe('footer', () => {
    let wrapper
    
    beforeAll(() => {
        wrapper = shallow(<Footer />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })

    it('should render without throwing an error', () => {
        expect(wrapper.contains(<i className="fas fa-envelope"></i>)).toBe(true);
    })

    it('should have styles from radium', () => {
        expect(wrapper.find(Style).length).toBe(1);
    })

    it('should use the small font', () => {
        expect(wrapper.find('.font-small').length).toBe(1);
    })
})

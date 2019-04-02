import React from 'react';
import { shallow } from 'enzyme';

import SiteSummary from './index';
import { Style } from 'radium'

describe('siteSummary', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<SiteSummary />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
    
    it('should have styles from radium', () => {
        expect(wrapper.find(Style).length).toBe(1);
    })
})
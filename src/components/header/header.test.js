import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('site header', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Header />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
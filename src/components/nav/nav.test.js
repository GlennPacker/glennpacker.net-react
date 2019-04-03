import React from 'react';
import { shallow } from 'enzyme';

import Nav from './index';

describe('nav', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Nav />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
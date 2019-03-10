import React from 'react';
import { shallow } from 'enzyme';

import Client from './index';

describe('client', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Client />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
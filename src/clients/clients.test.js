import React from 'react';
import { shallow } from 'enzyme';

import Clients from './index';

describe('clients', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Clients />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
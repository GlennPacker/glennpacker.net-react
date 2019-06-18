import React from 'react';
import { shallow } from 'enzyme';
import '../SetupTests';

import Routing from './index';

describe('routing', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Routing />);
    })

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
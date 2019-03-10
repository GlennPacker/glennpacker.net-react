import React from 'react';
import { shallow } from 'enzyme';

import History from './index';

describe('history', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<History />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
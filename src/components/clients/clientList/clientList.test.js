import React from 'react';
import { shallow } from 'enzyme';

import ClientList from './index';

describe('clientList', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<ClientList />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })
})
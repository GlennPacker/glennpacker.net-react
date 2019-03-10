import React from 'react';
import { shallow } from 'enzyme';

import { Style } from 'radium'
import Client from './index';

describe('client', () => {
    let wrapper
    beforeAll(() => {
        wrapper = shallow(<Client />);
    }) 

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })

    it('should have styles from radium', () => {
        expect(wrapper.find(Style)).not.toBeNull();
    })
})
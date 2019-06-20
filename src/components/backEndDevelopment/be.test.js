import React from 'react';
import '../SetupTests';
import Be from './index';
import { shallow } from 'enzyme';


describe('BackEndDevelopment', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Be />
        )

        expect(wrapper).toMatchSnapshot();
    })
})
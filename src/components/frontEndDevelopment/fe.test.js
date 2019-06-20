import React from 'react';
import '../SetupTests';
import Fe from './index';
import { shallow } from 'enzyme';


describe('FrontEndDevelopment', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Fe />
        )

        expect(wrapper).toMatchSnapshot();
    })
})